# 🛠️ Development Guide

This guide explains how to extend and contribute to the nekoQL project.

## 📁 Project Structure

```
nekoql/
├── backend/                 # TypeScript Express API
│   ├── src/
│   │   ├── endpoints/      # Individual endpoint handlers
│   │   │   ├── _template.ts # Template for new endpoints
│   │   │   ├── 8ball.ts    # 8-ball endpoint
│   │   │   ├── roll.ts     # Dice rolling
│   │   │   └── ...         # Other endpoints
│   │   ├── middleware/     # Express middleware
│   │   │   └── formatResponse.ts # Response format conversion
│   │   └── index.ts        # Main server file
│   ├── package.json        # Backend dependencies
│   └── tsconfig.json       # TypeScript config
├── frontend/               # React + TailwindCSS
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   │   ├── Header.tsx  # Navigation header
│   │   │   └── EndpointCard.tsx # Endpoint documentation card
│   │   ├── pages/         # Page components
│   │   │   ├── HomePage.tsx # Landing page
│   │   │   └── EndpointsPage.tsx # Endpoints listing
│   │   ├── App.tsx        # Main app component
│   │   └── main.tsx       # React entry point
│   ├── public/            # Static assets
│   ├── package.json       # Frontend dependencies
│   └── vite.config.ts     # Vite configuration
└── package.json           # Root workspace config
```

## 🎯 Adding New Endpoints

### Step 1: Create the Endpoint File

Copy the template and create a new file in `backend/src/endpoints/`:

```bash
cp backend/src/endpoints/_template.ts backend/src/endpoints/your-endpoint.ts
```

### Step 2: Implement the Handler

```typescript
// backend/src/endpoints/your-endpoint.ts
import { Request, Response } from "express";

export const handler = (req: Request, res: Response) => {
  // Get query parameters
  const text = req.query.text as string;
  
  // Your endpoint logic
  const result = {
    original: text,
    reversed: text?.split('').reverse().join('') || '',
    type: "text_reverse"
  };
  
  res.json(result);
};
```

### Step 3: Add Documentation

```typescript
export const documentation = {
  name: "Text Reverse",
  description: "Reverse any text string",
  endpoint: "/api/reverse",
  method: "GET",
  queryParams: {
    text: "string (required) - Text to reverse"
  },
  exampleRequest: "/api/reverse?text=hello",
  exampleResponse: {
    original: "hello",
    reversed: "olleh",
    type: "text_reverse"
  },
  category: "Text / AI-ish"
};
```

### Step 4: Register the Endpoint

Add to `backend/src/index.ts`:

```typescript
// Import the new endpoint
import { handler as reverseHandler, documentation as reverseDoc } from "./endpoints/reverse";

// Add to endpoints array
const endpoints = [
  // ... existing endpoints
  reverseDoc
];

// Add the route
app.get("/api/reverse", reverseHandler);
```

## 🔧 Response Format Middleware

The middleware automatically converts responses to YAML or TOML when requested:

```typescript
// JSON (default)
GET /api/8ball

// YAML
GET /api/8ball?response=yaml

// TOML  
GET /api/8ball?response=toml
```

### Adding New Response Formats

Extend `backend/src/middleware/formatResponse.ts`:

```typescript
import xml2js from 'xml2js';

// Add to the formatResponse function
if (format === "xml") {
  const builder = new xml2js.Builder();
  const xml = builder.buildObject(response);
  res.type("application/xml");
  return res.send(xml);
}
```

## 🎨 Frontend Customization

### Adding New Components

Create reusable components in `frontend/src/components/`:

```typescript
// frontend/src/components/YourComponent.tsx
import React from 'react';

interface YourComponentProps {
  title: string;
  children: React.ReactNode;
}

const YourComponent: React.FC<YourComponentProps> = ({ title, children }) => {
  return (
    <div className="neko-card p-6">
      <h3 className="text-xl font-semibold text-neko-800 mb-4">{title}</h3>
      {children}
    </div>
  );
};

export default YourComponent;
```

### Customizing the Theme

Edit `frontend/tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      neko: {
        50: '#fdf2f8',   // Light pink
        500: '#ec4899',  // Main pink
        900: '#831843',  // Dark pink
      },
      purrple: {
        50: '#faf5ff',   // Light purple
        500: '#a855f7',  // Main purple
        900: '#581c87',  // Dark purple
      }
    }
  }
}
```

### Adding New Pages

1. Create the page component in `frontend/src/pages/`
2. Add the route in `frontend/src/App.tsx`
3. Update navigation in `frontend/src/components/Header.tsx`

## 🧪 Testing

### Backend Testing

```bash
cd backend
npm test
```

Create test files in `backend/src/__tests__/`:

```typescript
// backend/src/__tests__/endpoints/8ball.test.ts
import request from 'supertest';
import app from '../index';

describe('8-Ball Endpoint', () => {
  it('should return a valid response', async () => {
    const response = await request(app)
      .get('/api/8ball')
      .query({ question: 'Will I win?' });
    
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toHaveProperty('answer');
  });
});
```

### Frontend Testing

```bash
cd frontend
npm test
```

## 🚀 Deployment

### Building for Production

```bash
# Build both frontend and backend
npm run build

# Start production server
npm start
```

### Environment Variables

Create `.env` files for configuration:

```bash
# backend/.env
PORT=3001
NODE_ENV=production
CORS_ORIGIN=https://yourdomain.com

# frontend/.env
VITE_API_URL=https://api.yourdomain.com
```

### Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3001
CMD ["npm", "start"]
```

## 📝 Code Style Guidelines

### TypeScript

- Use strict mode
- Prefer interfaces over types
- Use meaningful variable names
- Add JSDoc comments for complex functions

### React

- Use functional components with hooks
- Prefer TypeScript interfaces for props
- Use consistent naming conventions
- Keep components small and focused

### API Design

- Use RESTful conventions
- Return consistent response formats
- Include proper error handling
- Document all endpoints

## 🔍 Debugging

### Backend Debugging

```bash
# Enable debug logging
DEBUG=* npm run dev

# Use VS Code debugger
# Add to .vscode/launch.json
{
  "type": "node",
  "request": "launch",
  "name": "Debug Backend",
  "program": "${workspaceFolder}/backend/src/index.ts",
  "runtimeArgs": ["-r", "ts-node/register"]
}
```

### Frontend Debugging

```bash
# Enable React DevTools
# Install browser extension

# Use VS Code debugger
# Add to .vscode/launch.json
{
  "type": "chrome",
  "request": "launch",
  "name": "Debug Frontend",
  "url": "http://localhost:3000"
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Update documentation
6. Submit a pull request

### Pull Request Checklist

- [ ] Code follows style guidelines
- [ ] Tests pass
- [ ] Documentation updated
- [ ] No breaking changes (or documented)
- [ ] Response formats work correctly
- [ ] Frontend displays correctly

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://reactjs.org/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

Happy coding! 🐾✨