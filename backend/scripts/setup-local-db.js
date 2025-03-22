#!/usr/bin/env node

/**
 * This script creates a local D1 database for development
 */

const { execSync } = require('child_process');

// Run wrangler commands to set up the local D1 database
try {
  console.log('Creating local D1 database...');
  execSync('wrangler d1 create subxiv_db --local', { stdio: 'inherit' });
  
  console.log('Generating migrations...');
  execSync('npm run db:generate', { stdio: 'inherit' });
  
  console.log('Applying migrations...');
  execSync('npm run db:migrate', { stdio: 'inherit' });
  
  console.log('Local database setup complete!');
} catch (error) {
  console.error('Error setting up local database:', error.message);
  process.exit(1);
}