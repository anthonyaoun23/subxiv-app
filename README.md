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
2. Install dependencies: `npm install`
3. Set up environment variables (see `.env.example`)
4. Run the development server: `npm run dev`

## License

[MIT](LICENSE)