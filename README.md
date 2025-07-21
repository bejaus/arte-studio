# Arte Studio

A modern, full-stack web application template built with React, TypeScript, Tailwind CSS, and Netlify Functions. Arte Studio provides a scalable foundation for building beautiful, responsive web experiences with a robust backend.

---

## Features

- ⚡ **Fast Frontend**: Built with React and Vite for instant feedback and rapid development.
- 🎨 **Reusable UI Components**: A rich library of customizable, accessible UI components.
- 🖌️ **Tailwind CSS**: Utility-first CSS for rapid, consistent styling.
- 🦾 **TypeScript Everywhere**: End-to-end type safety for reliability and maintainability.
- ☁️ **Serverless Backend**: API endpoints powered by Netlify Functions.
- 🖥️ **Node.js Server**: Optional traditional backend for advanced use cases.
- 🔄 **Shared Code**: Common logic shared between frontend and backend.

---

## Project Structure

```
arte-studio/
  client/           # Frontend React app
    components/     # UI components
    pages/          # Top-level pages (routes)
    hooks/          # Custom React hooks
    lib/            # Utilities and helpers
    global.css      # Global styles
  netlify/
    functions/      # Netlify serverless functions (API)
  server/           # Node.js server and routes (optional)
  shared/           # Shared code between client and server
  public/           # Static assets
  tailwind.config.ts
  vite.config.ts
  package.json
  ...
```

For a deeper technical breakdown, see [AGENTS.md](./AGENTS.md).

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/arte-studio.git
   cd arte-studio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

---

## Development

### Start the Frontend

```bash
cd client
npm install
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Start the Backend (Node.js server, optional)

```bash
cd server
npm install
npm run dev
```

### Netlify Functions (Serverless API)

Netlify functions are located in `netlify/functions/`. They are automatically deployed when using Netlify.

---

## Building for Production

```bash
cd client
npm run build
```

---

## Deployment

- **Netlify:** This project is ready for deployment on Netlify. The `netlify.toml` file configures build and function settings.
- **Other Platforms:** You can adapt the build and server scripts for other hosting providers as needed.

---

## Scripts

| Command                | Description                        |
|------------------------|------------------------------------|
| `npm run dev`          | Start development server           |
| `npm run build`        | Build for production               |
| `npm run preview`      | Preview production build           |
| `npm run lint`         | Lint codebase                      |
| `npm run test`         | Run tests (if configured)          |

---

## Contributing

Contributions are welcome! Please open issues or pull requests for any features, bugs, or suggestions.

---

## License

[MIT](LICENSE)

---

## Further Documentation

For a detailed technical overview, architecture notes, and advanced usage, see [AGENTS.md](./AGENTS.md). 