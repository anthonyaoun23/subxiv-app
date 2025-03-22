import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';
import { initAuth } from './auth';
import { Database } from '../../drizzle/db';

// Define validation schemas
const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().optional(),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

// Create auth routes
export function createAuthRoutes(db: Database) {
  const auth = initAuth(db);
  const authRoutes = new Hono();

  // Register route
  authRoutes.post('/register', zValidator('json', registerSchema), async (c) => {
    const { email, password, name } = c.req.valid('json');

    try {
      // Check if user already exists
      const existingUser = await auth.adapter.getUserByEmail(email);
      if (existingUser) {
        return c.json({ error: 'User already exists' }, 400);
      }

      // Create user
      const user = await auth.createUser({
        email,
        password,
        name,
      });

      // Create session
      const session = await auth.createSession({
        userId: user.id,
      });

      // Set session cookie
      auth.setSessionCookie(c, session.id);

      return c.json({ 
        user: { 
          id: user.id, 
          email: user.email, 
          name: user.name 
        } 
      }, 201);
    } catch (error) {
      console.error('Registration error:', error);
      return c.json({ error: 'Failed to register user' }, 500);
    }
  });

  // Login route
  authRoutes.post('/login', zValidator('json', loginSchema), async (c) => {
    const { email, password } = c.req.valid('json');

    try {
      // Verify credentials
      const user = await auth.verifyCredentials({ email, password });
      if (!user) {
        return c.json({ error: 'Invalid credentials' }, 401);
      }

      // Create session
      const session = await auth.createSession({
        userId: user.id,
      });

      // Set session cookie
      auth.setSessionCookie(c, session.id);

      return c.json({ 
        user: { 
          id: user.id, 
          email: user.email, 
          name: user.name 
        } 
      });
    } catch (error) {
      console.error('Login error:', error);
      return c.json({ error: 'Failed to login' }, 500);
    }
  });

  // Logout route
  authRoutes.post('/logout', async (c) => {
    try {
      const sessionId = auth.getSessionIdFromCookie(c);
      if (sessionId) {
        await auth.deleteSession(sessionId);
      }
      
      // Clear session cookie
      auth.clearSessionCookie(c);
      
      return c.json({ success: true });
    } catch (error) {
      console.error('Logout error:', error);
      return c.json({ error: 'Failed to logout' }, 500);
    }
  });

  // Get current user route
  authRoutes.get('/me', async (c) => {
    try {
      const sessionId = auth.getSessionIdFromCookie(c);
      if (!sessionId) {
        return c.json({ user: null }, 401);
      }

      const session = await auth.getSession(sessionId);
      if (!session) {
        auth.clearSessionCookie(c);
        return c.json({ user: null }, 401);
      }

      const user = await auth.adapter.getUserById(session.userId);
      if (!user) {
        auth.clearSessionCookie(c);
        return c.json({ user: null }, 401);
      }

      return c.json({ 
        user: { 
          id: user.id, 
          email: user.email, 
          name: user.name 
        } 
      });
    } catch (error) {
      console.error('Get current user error:', error);
      return c.json({ error: 'Failed to get current user' }, 500);
    }
  });

  return authRoutes;
}