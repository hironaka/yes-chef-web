# Yes Chef! - AI Recipe Assistant Web Interface

This project is a web interface for an AI-powered recipe assistant called "Yes Chef!". It allows users to interact with an AI sous-chef in real-time while viewing a recipe.

**Core Technologies:**

*   [Next.js](https://nextjs.org/) (App Router)
*   [React](https://reactjs.org/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [OpenAI Realtime API](https://platform.openai.com/docs/guides/realtime)
*   [WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)

**Key Feature:** Real-time voice and text interaction with an AI assistant based on the recipe currently being viewed.

**🚨 Important Dependency:** This web application requires a companion **Chrome Browser Extension** (ID: `lmakaflodkdoemdbcahofdoiihchjbim`) to be installed and active. The extension is responsible for providing the recipe data to this web interface. *Without the extension, the core recipe assistant feature will not function.* (Link to extension repository/store page should be added here if available).

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (Check `.nvmrc` or `package.json` engines field for specific version requirements, if any)
*   [npm](https://www.npmjs.com/) (usually comes with Node.js)
*   The companion Chrome Extension (ID: `lmakaflodkdoemdbcahofdoiihchjbim`) installed in your browser.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url> # Replace with the actual URL
    cd yes-chef-web
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    *   You'll need an OpenAI API key. [Create one here if you don't have one](https://platform.openai.com/settings/api-keys).
    *   Copy the example environment file:
        ```bash
        cp .env.example .env.local
        ```
    *   Open `.env.local` and add your OpenAI API key:
        ```
        OPENAI_API_KEY=your_openai_api_key_here
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
