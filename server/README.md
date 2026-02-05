# Link Master - Server

A Node.js/Express backend API for managing links with MongoDB database integration.

## Overview

This is the server-side application for Link Master, providing REST API endpoints for link management operations.

## Features

- 🔌 RESTful API
- 💾 MongoDB integration
- 🛡️ Error handling
- 📦 Modular route structure
- 🗂️ MVC architecture

## Project Structure

```
server/
├── app.js                 # Express app setup
├── package.json           # Dependencies
├── bin/
│   └── www               # Server entry point
├── config/
│   └── connectdb.js      # Database configuration
├── models/
│   └── link.model.js     # Link data model
├── routes/
│   ├── index.js          # Main routes
│   ├── addlink.js        # Add link endpoint
│   ├── fetchlinks.js     # Fetch links endpoint
│   └── users.js          # User routes
├── views/
│   ├── index.ejs         # Index view
│   └── error.ejs         # Error view
├── public/
│   ├── javascripts/      # Client-side JS
│   ├── stylesheets/      # CSS files
│   └── images/           # Image assets
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas connection)

### Installation

```bash
cd server
npm install
```

### Configuration

Create a `.env` file in the server directory:

```
MONGODB_URI=mongodb://localhost:27017/link-master
PORT=3000
NODE_ENV=development
```

### Running the Server

Start the server:

```bash
npm start
```

The server will run on `http://localhost:3000` (default)

For development with auto-reload:

```bash
npm run dev
```

## API Routes

### Links
- `GET /fetchlinks` - Retrieve all links
- `POST /addlink` - Add a new link

### Users
- `GET /users` - User-related operations
- `POST /users` - Create or update user

### Index
- `GET /` - Home route

## API Request/Response Examples

### Add Link
```bash
POST /addlink
Content-Type: application/json

{
  "title": "Example Link",
  "url": "https://example.com",
  "description": "A sample link"
}
```

### Fetch Links
```bash
GET /fetchlinks
```

Response:
```json
{
  "links": [
    {
      "_id": "...",
      "title": "Example Link",
      "url": "https://example.com",
      "description": "A sample link",
      "createdAt": "2026-02-06T..."
    }
  ]
}
```

## Database Models

### Link Model
Located in [models/link.model.js](models/link.model.js)

- `title` - Link title
- `url` - Link URL
- `description` - Link description
- `createdAt` - Creation timestamp
- `updatedAt` - Last updated timestamp

## Configuration

### Database Connection
Database connection is configured in [config/connectdb.js](config/connectdb.js)

### Environment Variables
- `MONGODB_URI` - MongoDB connection string
- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)

## Scripts

- `npm start` - Start the server
- `npm run dev` - Start server with auto-reload (if configured)

## Technologies Used

- Node.js
- Express.js
- MongoDB
- EJS (templating)

## Error Handling

The server includes comprehensive error handling for:
- Database connection errors
- Invalid requests
- Missing data validation
- Server errors

Error responses are rendered using [views/error.ejs](views/error.ejs)

## Middleware

Express middleware is configured in [app.js](app.js) for:
- Request parsing (JSON, URL-encoded)
- Static file serving
- View engine setup (EJS)

## Contributing

Contributions are welcome! Please ensure:
- All routes are properly documented
- Error handling is implemented
- Code follows existing patterns

## License

MIT
