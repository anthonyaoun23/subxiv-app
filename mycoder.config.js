// mycoder.config.js
export default {
    // GitHub integration
    githubMode: true,
  
    // Browser settings
    headless: true,
    userSession: false,
    pageFilter: 'simple', // 'simple', 'none', or 'readability'
  
    // Model settings
    provider: 'anthropic',
    model: 'claude-3-7-sonnet-20250219',
  
    profile: false,
    tokenCache: true,
  };