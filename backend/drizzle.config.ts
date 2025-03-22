import type { Config } from 'drizzle-kit';

export default {
  schema: './src/drizzle/schema/index.ts',
  out: './src/drizzle/migrations',
  driver: 'd1',
  dbCredentials: {
    wranglerConfigPath: './wrangler.toml',
    dbName: 'subxiv_db',
  },
} satisfies Config;