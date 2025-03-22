import { Hono } from 'hono';
import { cors } from 'hono/cors';

// Create the main Hono app
const app = new Hono();

// Add CORS middleware
app.use('*', cors({
  origin: ['*'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  exposeHeaders: ['Content-Length'],
  maxAge: 86400,
}));

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

// Export the app for Cloudflare Workers
export default app;