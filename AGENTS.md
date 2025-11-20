# Agent Development Guidelines

## Build & Test Commands

- **Development**: `npm run dev` - Start Next.js dev server on port 3000
- **Build**: `npm run build` - Production build
- **Lint**: `npm lint` - Run ESLint across all files
- **Database**: `npm run generate` - Generate Drizzle migrations; `npm run migrate` - Apply migrations
- **No test framework configured** - This is a UI/full-stack project without tests

## Code Style Guidelines

### Imports & File Organization
- Use path aliases: `@/` maps to `src/`
- Group imports: external deps → relative paths → internal modules
- Client components start with `"use client"`
- One blank line between import groups

### Formatting & Naming
- **Indentation**: tabs (see src/lib/auth.ts)
- **Naming**: PascalCase for components/types, camelCase for functions/variables
- **Components**: suffix with component purpose (e.g., `TogglePage`, `GithubSignIn`)
- **Types**: Use type inference with Drizzle: `InferSelectModel`, `InferInsertModel`

### Types & Type Safety
- Strict mode enabled in tsconfig.json
- Inline object types for component props when simple (see toggle-page.tsx)
- Extract complex types to separate declarations
- Use Drizzle schema types: `type User = InferSelectModel<typeof user>`

### Error Handling
- Validate environment variables with `as string` assertions
- Use try-catch for async operations
- Better-auth handles auth errors; check docs for error types
- Database: Drizzle throws on constraint violations

### Patterns
- React 19 with Server Components (default)
- State: Zustand for client state (toglog-store.ts)
- UI: Radix UI + Tailwind CSS + custom components in components/ui/
- Database: Drizzle ORM with SQLite via LibSQL
- Auth: better-auth with GitHub OAuth
