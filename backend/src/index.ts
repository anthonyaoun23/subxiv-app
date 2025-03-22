import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { createAuthRoutes, createAuthMiddleware } from './modules/auth';
import { createDb } from './drizzle/db';

// Create the main Hono app
const app = new Hono<{
  Bindings: {
    DB: D1Database;
  },
  Variables: {
    user: any | null;
    db: any;
  }
}>();

// Add CORS middleware
app.use('*', cors({
  origin: ['*'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  exposeHeaders: ['Content-Length'],
  maxAge: 86400,
  credentials: true,
}));

// Add DB and Auth middleware
app.use('*', async (c, next) => {
  // Create DB instance
  const db = createDb(c.env.DB);
  c.set('db', db);
  
  // Add auth middleware
  const authMiddleware = createAuthMiddleware(db);
  await authMiddleware(c, next);
});

// Define API routes
app.get('/', (c) => {
  return c.json({
    message: 'Hello World from SubXiv API!',
    status: 'ok',
    version: '0.1.0',
  });
});

// Health check endpoint
app.get('/health', (c) => {
  return c.json({ status: 'ok' });
});

// Auth routes
app.route('/auth', createAuthRoutes(createDb(app.env.DB)));

// Export the app for Cloudflare Workers
export default app;