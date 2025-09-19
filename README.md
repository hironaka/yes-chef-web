# Yes Chef! - AI Recipe Assistant Web Interface

This project is a web interface for an AI-powered recipe assistant called "Yes Chef!". It allows users to interact with an AI sous-chef in real-time while viewing a recipe.

## Core Technologies

*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Database**: [PostgreSQL](https://www.postgresql.org/)
*   **ORM**: [Prisma](https://www.prisma.io/)
*   **Authentication**: [NextAuth.js](https://next-auth.js.org/)
*   **AI**:
    *   [OpenAI API](https://platform.openai.com/docs/guides/realtime)
    *   [Google Cloud Vertex AI](https://cloud.google.com/vertex-ai)
*   **Deployment**: [Heroku](https://www.heroku.com/)

## Key Feature

Real-time voice and text interaction with an AI assistant based on the recipe currently being viewed.

**🚨 Important Dependency:** This web application requires a companion **Chrome Browser Extension** to be installed and active. The extension is responsible for providing the recipe data to this web interface. *Without the extension, the core recipe assistant feature will not function.*

## Architecture Overview

This is a Next.js 15 (App Router) application that provides a web interface for an AI-powered recipe assistant called "Yes Chef!". The core feature is real-time voice and text interaction with an AI sous-chef while viewing recipes.

### Key Dependencies & Integration

- **Chrome Extension Dependency:** Requires companion Chrome Extension for recipe data
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

## Project Structure

The project is organized as follows:

*   `src/app`: Contains the main application routes, including `api`, `contact`, `recipe`, and user authentication pages.
*   `src/components`: Reusable React components used throughout the application.
*   `src/lib`: Utility functions and actions.
*   `prisma`: Contains the database schema (`schema.prisma`) and migrations.
*   `public`: Static assets such as images and audio files.

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/)
*   [npm](https://www.npmjs.com/) (usually comes with Node.js)
*   [PostgreSQL](https://www.postgresql.org/)
*   The companion Chrome Extension installed in your browser.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd yes-chef-web
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    *   Copy the example environment file:
        ```bash
        cp .env.example .env.local
        ```
    *   Open `.env.local` and configure the following variables:
        *   `DATABASE_URL`: Your PostgreSQL connection string.
        *   `OPENAI_API_KEY`: Your OpenAI API key.
        *   `GCP_PROJECT`: Your Google Cloud project ID.
        *   `GCP_LOCATION`: Your Google Cloud location.
        *   `GOOGLE_APPLICATION_CREDENTIALS`: Path to your Google Cloud service account key file.
        *   `NEXTAUTH_SECRET`: A secret key for NextAuth.js.
        *   `NEXTAUTH_URL`: The URL of your application.

4.  **Set up the database:**
    *   Run the following command to create the database schema:
        ```bash
        npx prisma db push
        ```

### Database Operations

```bash
npx prisma generate    # Generate Prisma client
npx prisma db push     # Push schema changes to database
npx prisma migrate dev # Create and apply migrations
npx prisma studio      # Open database browser
```

### Running the Development Server

1.  **Start the application:**
    ```bash
    npm run dev
    ```

2.  Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

3.  Navigate to the `/recipe` page to use the AI assistant feature (ensure the Chrome Extension is active and you have a recipe loaded via the extension).

## License

MIT
