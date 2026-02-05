# Link Master - Client

A React + TypeScript frontend application for managing links with a modern, responsive UI.

## Overview

This is the client-side application for Link Master, built with React and TypeScript. It provides an intuitive interface for users to add, search, and manage their links.

## Features

- 🎨 Modern, responsive UI
- 🔍 Real-time link search
- ➕ Add new links easily
- 📋 View all links in a card-based layout
- ⚡ Fast performance with Vite

## Project Structure

```
src/
├── components/
│   ├── AddButton.tsx      # Button component for adding links
│   ├── LinkCard.tsx       # Individual link card display
│   ├── LinkForm.tsx       # Form for adding/editing links
│   └── SearchBar.tsx      # Search functionality
├── pages/
│   └── Dash.tsx           # Main dashboard page
├── App.tsx                # Root App component
├── main.tsx               # Application entry point
└── App.css                # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
cd client
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port)

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `tsconfig.app.json` - App-specific TS config
- `tsconfig.node.json` - Node-specific TS config
- `eslint.config.js` - ESLint rules

## Environment Variables

Create a `.env` file in the client directory:

```
VITE_API_URL=http://localhost:3000
```

## Component Details

### SearchBar
Allows users to search through their links in real-time.

### LinkForm
Form component for adding new links with validation.

### LinkCard
Displays individual link information in a card format.

### AddButton
Button to trigger the link creation form.

## Technologies Used

- React 18+
- TypeScript
- Vite
- CSS3

## Contributing

Contributions are welcome! Please follow the existing code structure and style.
