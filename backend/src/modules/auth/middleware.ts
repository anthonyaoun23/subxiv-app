import { Context, MiddlewareHandler } from 'hono';
import { initAuth } from './auth';
import { Database } from '../../drizzle/db';

export function createAuthMiddleware(db: Database): MiddlewareHandler {
  const auth = initAuth(db);

  return async (c: Context, next) => {
    const sessionId = auth.getSessionIdFromCookie(c);
    if (!sessionId) {
      c.set('user', null);
      return next();
    }

    try {
      const session = await auth.getSession(sessionId);
      if (!session) {
        auth.clearSessionCookie(c);
        c.set('user', null);
        return next();
      }

      const user = await auth.adapter.getUserById(session.userId);
      if (!user) {
        auth.clearSessionCookie(c);
        c.set('user', null);
        return next();
      }

      // Set user in context
      c.set('user', user);
    } catch (error) {
      console.error('Auth middleware error:', error);
      c.set('user', null);
    }

    return next();
  };
}

// Middleware to require authentication
export function requireAuth(): MiddlewareHandler {
  return async (c: Context, next) => {
    const user = c.get('user');
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }
    
    return next();
  };
}