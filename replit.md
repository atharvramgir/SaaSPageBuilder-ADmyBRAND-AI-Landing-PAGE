# Overview

ADmyBRAND AI Suite is a modern SaaS landing page application built as a fictional AI-powered marketing platform. The project demonstrates cutting-edge web development practices with a focus on stunning visual design, glassmorphism effects, and smooth animations. It features a complete landing page with hero section, features showcase, pricing tiers, testimonials carousel, FAQ section, and contact form functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application uses a modern React-based architecture with TypeScript for type safety. The frontend is built with Vite for fast development and optimized builds, utilizing React 18 features and hooks for state management.

**Key Design Decisions:**
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theme management
- **UI Components**: Radix UI primitives with shadcn/ui component system for accessibility and consistency
- **Animations**: Custom scroll-triggered animations using Intersection Observer API
- **State Management**: React Query for server state and React hooks for local state

## Backend Architecture
Express.js server with TypeScript provides a minimal REST API architecture. The server follows a modular pattern with separate route handlers and storage abstraction.

**Key Design Decisions:**
- **Framework**: Express.js for simplicity and familiarity
- **Database Layer**: Abstract storage interface with in-memory implementation for development
- **Validation**: Zod schemas for runtime type validation
- **Error Handling**: Centralized error middleware with proper HTTP status codes

## Design System
The application implements a comprehensive design system based on 2025 design trends:

**Visual Design:**
- **Glassmorphism**: Custom CSS classes for glass-like translucent effects
- **Color System**: CSS custom properties supporting dark theme with gradient accents
- **Typography**: Inter font family with carefully crafted hierarchy
- **Component Library**: 30+ reusable UI components following consistent design patterns

**Responsive Design:**
- Mobile-first approach with Tailwind's responsive utilities
- Smooth scrolling and optimized touch interactions
- Adaptive navigation with mobile hamburger menu

## Data Management
Simple contact form submission system with validation and user feedback.

**Schema Design:**
- User and contact submission tables with Drizzle ORM schema definitions
- Zod validation schemas for type-safe form handling
- Separation of insert and select types for better type safety

# External Dependencies

## Core Framework Dependencies
- **React 18**: Modern React with hooks and concurrent features
- **TypeScript**: Static typing for enhanced developer experience
- **Vite**: Fast build tool with hot module replacement
- **Express.js**: Node.js web framework for API endpoints

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Radix UI**: Accessible component primitives (@radix-ui/react-*)
- **shadcn/ui**: Pre-built component library with consistent design
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets (react-icons/fa)

## Database and Validation
- **Drizzle ORM**: Type-safe database toolkit with schema management
- **Neon Database**: Serverless PostgreSQL database (@neondatabase/serverless)
- **Zod**: Runtime type validation and schema parsing
- **Drizzle-Zod**: Integration between Drizzle schemas and Zod validation

## Form Handling and Data Fetching
- **React Hook Form**: Performant form library with validation
- **TanStack Query**: Server state management and caching
- **Hookform Resolvers**: Integration between React Hook Form and validation libraries

## Development and Build Tools
- **PostCSS**: CSS processing with Autoprefixer
- **ESBuild**: Fast JavaScript bundler for production builds
- **TSX**: TypeScript execution for development server
- **Replit Plugins**: Development environment integration for Replit platform

## Animations and Interactions
- **Embla Carousel**: Touch-friendly carousel component
- **Class Variance Authority**: Dynamic class name generation
- **Date-fns**: Date manipulation utilities
- **CLSX & Tailwind Merge**: Conditional class name utilities