# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Start development server:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
```

**Lint code:**
```bash
npm run lint
```

**Database operations:**
```bash
npx prisma generate    # Generate Prisma client
npx prisma db push     # Push schema changes to database
npx prisma migrate dev # Create and apply migrations
npx prisma studio      # Open database browser
```

## Architecture Overview

This is a Next.js 15 (App Router) application that provides a web interface for an AI-powered recipe assistant called "Yes Chef!". The core feature is real-time voice and text interaction with an AI sous-chef while viewing recipes.

### Key Dependencies & Integration

- **Chrome Extension Dependency:** Requires companion Chrome Extension (ID: `lmakaflodkdoemdbcahofdoiihchjbim`) for recipe data
- **OpenAI Realtime API:** Powers voice/text AI interaction via WebRTC
- **Google Cloud Vertex AI:** Used for recipe extraction from URLs
- **NextAuth.js:** Authentication with Google, Facebook, and credentials providers
- **Prisma + PostgreSQL:** Database layer with user management and data deletion tracking

### Core Architecture

**Frontend Structure:**
- `src/app/` - Next.js App Router pages and API routes
- `src/components/` - React components organized by feature (Auth, Recipe, Home, Layout)
- `src/components/Recipe/App.jsx` - Main recipe assistant interface with WebRTC integration

**Recipe Assistant Flow:**
1. Extension provides recipe data to web interface
2. User initiates session via SessionControls component
3. WebRTC connection established with OpenAI Realtime API
4. Real-time voice/text communication with AI sous-chef
5. Timer functionality integrated for cooking instructions

**Authentication & Database:**
- Multi-provider auth (Google, Facebook, email/password)
- Prisma schema includes NextAuth tables plus custom DataDeletionRequest model
- JWT session strategy for scalability

**Key Integration Points:**
- `/api/recipe/extract` - Vertex AI recipe extraction endpoint
- Extension communication via `chrome.runtime.sendMessage`
- WebRTC data channels for AI event streaming
- Timer system with audio notifications

### Environment Configuration

Copy `.env.example` to `.env.local` and configure:
- `OPENAI_API_KEY` - Required for AI assistant
- `GCP_PROJECT` & GCP credentials - Required for recipe extraction
- OAuth credentials for social login
- `DATABASE_URL` - PostgreSQL connection
- `NEXTAUTH_SECRET` & `NEXTAUTH_URL` - Authentication

### Important Notes

- Recipe functionality requires active Chrome extension
- WebRTC requires HTTPS in production
- Prisma client output explicitly set to `../node_modules/.prisma/client`
- Timer uses Web Audio API for notifications
- All remote images allowed via Next.js config