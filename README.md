# Niksen Job Search - Turborepo Monorepo

A modern job search application built with Turborepo, featuring a clean monorepo architecture for scalable development.

## Project Structure

```
niksen-job-search/
├── apps/
│   └── web/                 # Next.js App Router frontend
├── packages/
│   ├── api/                 # Express.js backend API
│   ├── ui/                  # Shared UI components
│   └── config/              # Shared configurations
├── package.json             # Root package.json with workspaces
├── turbo.json              # Turborepo configuration
├── tsconfig.base.json      # Base TypeScript configuration
├── .env.example            # Environment variables template
└── .gitignore              # Git ignore patterns
```

## Tech Stack

- **Frontend**: Next.js 14 with App Router, React 18, TypeScript
- **Backend**: Express.js API with TypeScript
- **UI Components**: Shared component library with Tailwind CSS
- **Build System**: Turborepo for efficient builds and caching
- **Development Tools**: ESLint, Prettier, TypeScript
- **Package Manager**: npm/yarn/pnpm with workspaces

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gagangulyani/niksen-job-search.git
   cd niksen-job-search
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

4. **Start development servers**
   ```bash
   npm run dev
   # This will start both the web app and API server
   ```

### Development URLs

- **Frontend (Next.js)**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **API Health Check**: http://localhost:3001/health

## Available Scripts

### Root Level Scripts

- `npm run dev` - Start all development servers (web + api)
- `npm run build` - Build all applications and packages
- `npm run start` - Start production servers
- `npm run lint` - Lint all packages
- `npm run lint:fix` - Fix linting issues
- `npm run clean` - Clean all build outputs and node_modules

### Package-Specific Scripts

#### Web App (`apps/web`)
- `npm run dev --workspace=web` - Start Next.js development server
- `npm run build --workspace=web` - Build Next.js application
- `npm run start --workspace=web` - Start Next.js production server

#### API (`packages/api`)
- `npm run dev --workspace=@niksen/api` - Start Express development server
- `npm run start --workspace=@niksen/api` - Start Express production server

## Environment Variables

Copy `.env.example` to `.env` and configure:

```env
# API Configuration
PORT=3001
NODE_ENV=development

# Frontend Configuration  
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_APP_NAME="Niksen Job Search"

# Add more variables as needed
```

## Package Structure

### `apps/web` - Next.js Frontend
- Built with Next.js 14 and App Router
- Uses TypeScript and Tailwind CSS
- Imports shared components from `@niksen/ui`
- Configured with shared configs from `@niksen/config`

### `packages/api` - Express.js API
- RESTful API built with Express.js
- Health check endpoint at `/health`
- Environment-based configuration
- CORS and security middleware included

### `packages/ui` - Shared UI Components
- Reusable React components with TypeScript
- Styled with Tailwind CSS
- Button component with multiple variants
- Easy to extend with more components

### `packages/config` - Shared Configuration
- ESLint configurations
- Prettier settings  
- Tailwind CSS presets
- TypeScript configurations

## Development Workflow

1. **Adding New Features**
   - Create feature branches from `main`
   - Work in the appropriate package/app
   - Use shared components from `@niksen/ui`
   - Follow the established code style

2. **Adding New Packages**
   - Create new package in `packages/` directory
   - Add to workspaces in root `package.json`
   - Configure turbo pipeline in `turbo.json`
   - Add appropriate dependencies

3. **Testing Changes**
   - Run `npm run lint` to check code quality
   - Test both frontend and API endpoints
   - Ensure all packages build successfully

## Monorepo Benefits

- **Shared Dependencies**: Common packages managed in one place
- **Code Sharing**: Reusable components and utilities across apps
- **Consistent Tooling**: Unified linting, testing, and build processes
- **Efficient Builds**: Turborepo's intelligent caching and parallelization
- **Atomic Changes**: Update multiple packages in single commits
- **Simplified Deployment**: Single repository for all related code

## Build System (Turborepo)

Turborepo provides:
- **Fast Builds**: Only rebuilds what changed
- **Remote Caching**: Share build artifacts across team
- **Parallel Execution**: Run tasks across packages simultaneously
- **Task Pipeline**: Define dependencies between tasks

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Troubleshooting

### Common Issues

- **Port conflicts**: Change ports in `.env` file
- **Module resolution**: Clear `node_modules` and reinstall
- **Build failures**: Run `npm run clean` then `npm run build`
- **TypeScript errors**: Check `tsconfig.json` extends are correct

### Getting Help

- Check existing GitHub Issues
- Review package-specific README files  
- Consult Turborepo documentation
- Ask questions in Discussions

## License

MIT License - see LICENSE file for details.

## Roadmap

- [ ] Database integration (PostgreSQL)
- [ ] User authentication system
- [ ] Job search API integrations
- [ ] Real-time notifications
- [ ] Advanced filtering and search
- [ ] Resume builder functionality
- [ ] Application tracking system
