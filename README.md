# Fitex Dashboard

A modern React dashboard application built with TypeScript, Vite, and Tailwind CSS for managing marketing campaigns and viewing analytics.

## 🚀 Features

- **Campaign Management**: Create and view marketing campaigns
- **Analytics Dashboard**: Interactive charts showing installs and revenue data
- **Dynamic Imports**: Optimized loading with code splitting for better performance
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: Full TypeScript support with Zod validation
- **Modern React**: Uses React 19 features and React Query for data management

## 🛠 Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS 4.x
- **Data Visualization**: Recharts
- **Form Management**: React Hook Form with Zod validation
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router DOM v7
- **Package Manager**: pnpm

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Build for production:
   ```bash
   pnpm build
   ```

## 🏗 Project Structure

```
src/
├── api/              # API layer and HTTP client
├── components/       # Reusable UI components
│   └── ui/          # Basic UI components (Card, Spinner)
├── contexts/        # React contexts
├── hooks/           # Custom React hooks
├── mock/            # Mock data for development
├── pages/           # Page components
├── providers/       # Context providers
├── types/           # TypeScript type definitions
├── App.tsx          # Main app component
├── main.tsx         # Application entry point
└── router.tsx       # Route definitions
```

## 📱 Pages

### Overview Page
- Displays weekly analytics with area charts
- Shows installs and revenue trends
- Dynamically loads chart components

### Campaigns Page
- Lists all marketing campaigns
- Interactive bar charts for campaign performance
- Campaign selection dropdown

### Create Campaign Page
- Form for creating new campaigns
- Real-time validation with Zod
- Duplicate name prevention

## 🔧 Development

### Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint
- `pnpm preview` - Preview production build

### Code Quality

- ESLint configuration with TypeScript support
- Prettier for code formatting
- Type-safe API calls with Zod validation
- Consistent component patterns

## 📐 Architecture Patterns

- **Component Composition**: Reusable UI components
- **Custom Hooks**: Business logic extraction
- **Type-First Development**: TypeScript and Zod schemas
- **Separation of Concerns**: Clear API, UI, and business logic layers
