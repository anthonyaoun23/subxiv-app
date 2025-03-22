# SubXiv - Next-Gen arXiv Monitoring App

SubXiv is a personalized research monitoring system that allows users to define their intellectual interests through natural language prompts and structured filters to receive curated arXiv updates. 

## Core Features

- **Interest Profile System**: Create and manage personalized profiles with guided templates and dynamic filters
- **Recommendation Engine**: Three-stage filtering combining structural, semantic, and recency factors
- **Notification System**: Customizable delivery preferences across multiple channels
- **Knowledge Dashboard**: Paper discovery, research library, and insight tracking
- **Collaboration**: Team libraries and shared notes (Premium feature)

## Tech Stack

- **Frontend**: React with Vite/Next.js, Tailwind CSS, shadcn/ui
- **Backend**: Cloudflare Workers with Hono.js
- **Database**: Cloudflare D1 with Drizzle ORM
- **Authentication**: Lucia Auth
- **LLM/Semantic Search**: Integration with AI services for paper relevance scoring

## Development

This project is under active development. See the [project plan](plan.md) for details on the development roadmap and technical architecture.

### Getting Started

1. Clone this repository
   ```bash
   git clone https://github.com/anthonyaoun23/subxiv-app.git
   cd subxiv-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env
   # Edit .env with your API keys
   ```

4. Start the development servers
   ```bash
   # Start both frontend and backend
   npm run dev
   
   # Or start them separately
   npm run dev:frontend
   npm run dev:backend
   ```

5. Access the application
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8787

### Cloudflare Deployment

#### Backend (Cloudflare Workers)

1. Log in to Cloudflare dashboard and create a Workers project
2. Configure wrangler.toml with your account details
3. Deploy the worker:
   ```bash
   cd backend
   npm run deploy
   ```

#### Frontend (Cloudflare Pages)

1. Connect your GitHub repository to Cloudflare Pages
2. Configure build settings:
   - Build command: `npm run build:frontend`
   - Build directory: `frontend/dist`
3. Set environment variables in the Cloudflare Pages dashboard

## License

[MIT](LICENSE)