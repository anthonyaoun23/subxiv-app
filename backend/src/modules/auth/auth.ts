import { betterAuth } from 'better-auth';
import { createDb, type Database } from '../../drizzle/db';
import { users, sessions } from '../../drizzle/schema';
import { createId } from '@paralleldrive/cuid2';

// Create a custom adapter for BetterAuth to use with Drizzle ORM
export const createBetterAuthAdapter = (db: Database) => {
  return {
    async createUser({ email, id: authId, name }) {
      const newUser = await db.insert(users).values({
        email,
        authId,
        name: name || '',
      }).returning().get();
      
      return newUser;
    },
    
    async getUserByEmail(email: string) {
      return await db.query.users.findFirst({
        where: (users, { eq }) => eq(users.email, email)
      });
    },
    
    async getUserById(id: string) {
      return await db.query.users.findFirst({
        where: (users, { eq }) => eq(users.id, id)
      });
    },
    
    async getUserByAuthId(authId: string) {
      return await db.query.users.findFirst({
        where: (users, { eq }) => eq(users.authId, authId)
      });
    },
    
    async createSession({ userId, expiresAt }) {
      const session = await db.insert(sessions).values({
        userId,
        expiresAt: new Date(expiresAt),
      }).returning().get();
      
      return session;
    },
    
    async getSessionById(id: string) {
      return await db.query.sessions.findFirst({
        where: (sessions, { eq }) => eq(sessions.id, id)
      });
    },
    
    async deleteSession(id: string) {
      await db.delete(sessions).where(sessions.id === id);
    },
    
    async deleteUserSessions(userId: string) {
      await db.delete(sessions).where(sessions.userId === userId);
    }
  };
};

// Initialize BetterAuth
export function initAuth(db: Database) {
  const adapter = createBetterAuthAdapter(db);
  
  const auth = betterAuth({
    adapter,
    sessionExpiresIn: 30 * 24 * 60 * 60, // 30 days in seconds
    generateId: () => createId(),
    cookies: {
      secure: true,
      sameSite: 'lax',
    },
  });
  
  return auth;
}

// Type for Auth instance
export type Auth = ReturnType<typeof initAuth>;