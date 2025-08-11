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
└── .gitignore              # Git ignore patterns
```

## Tech Stack

- **Frontend**: Next.js with App Router
- **Backend**: Express.js API
- **UI**: Shared component library
- **Build System**: Turborepo
- **Language**: TypeScript
- **Package Manager**: npm/yarn/pnpm

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/gagangulyani/niksen-job-search.git
cd niksen-job-search

# Install dependencies
npm install

# Start development servers
npm run dev
```

## Available Scripts

- `npm run dev` - Start all development servers
- `npm run build` - Build all applications and packages
- `npm run lint` - Lint all packages
- `npm run test` - Run tests across all packages

## Monorepo Benefits

- **Shared Dependencies**: Common packages managed in one place
- **Code Sharing**: Reusable components and utilities
- **Consistent Tooling**: Unified linting, testing, and build processes
- **Efficient Builds**: Turborepo's intelligent caching and parallelization

## Development

This project uses Turborepo for efficient builds and development. Each package can be developed independently while sharing common code and configurations.

## Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests for any improvements.

## License

MIT License - see LICENSE file for details.
