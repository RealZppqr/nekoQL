# 🐾 nekoQL

A cute neko-themed public API provider with 50 endpoints. No authentication required, just pure API goodness!

## ✨ Features

- **50+ Endpoints** across 5 categories
- **Multiple Response Formats**: JSON, YAML, TOML
- **No Authentication Required** - completely public
- **Cute Neko Theme** - soft pink/purple design
- **TypeScript Backend** with Express
- **React Frontend** with TailwindCSS
- **Modular Architecture** - easy to extend

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/nekoql.git
   cd nekoql
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Start development servers**
   ```bash
   npm run dev
   ```

This will start:
- Backend API on `http://localhost:3001`
- Frontend on `http://localhost:3000`

## 📚 API Usage

### Basic Usage

```bash
# Get a random 8-ball response
curl https://api.nekoql.com/api/8ball?question=Will%20I%20win%20the%20lottery

# Roll some dice
curl https://api.nekoql.com/api/roll?sides=20&count=3

# Get a random cat image
curl https://api.nekoql.com/api/cat
```

### Response Formats

Add `?response=format` to any endpoint:

```bash
# JSON (default)
curl https://api.nekoql.com/api/8ball

# YAML
curl https://api.nekoql.com/api/8ball?response=yaml

# TOML
curl https://api.nekoql.com/api/8ball?response=toml
```

### Example Response

```json
{
  "success": true,
  "data": {
    "question": "Will I win the lottery?",
    "answer": "It is certain",
    "type": "8ball"
  },
  "timestamp": "2024-01-15T10:30:00.000Z",
  "endpoint": "/api/8ball",
  "format": "json"
}
```

## 🎯 Endpoint Categories

### 🎲 Fun & Games
- `/api/8ball` - Random 8-ball response
- `/api/roll` - Dice roller
- `/api/flip` - Coin flip
- `/api/rps` - Rock-paper-scissors
- `/api/truth` - Random truth
- `/api/dare` - Random dare
- `/api/joke` - Random joke
- `/api/meme` - Random meme
- `/api/showerthought` - Shower thought
- `/api/quote` - Random quote

### 🐱 Animals
- `/api/cat` - Random cat image
- `/api/catfact` - Random cat fact
- `/api/dog` - Random dog image
- `/api/dogfact` - Random dog fact
- `/api/fox` - Random fox image
- `/api/foxfact` - Random fox fact
- `/api/panda` - Random panda image
- `/api/bird` - Random bird image
- `/api/animalfact` - Random mixed fact
- `/api/neko` - Anime neko image

### ⚡ Utility
- `/api/ip` - Returns client IP
- `/api/uuid` - Generate UUID
- `/api/time` - Current time
- `/api/date` - Current date
- `/api/weather` - Weather data
- `/api/crypto` - Crypto price
- `/api/currency` - Exchange rate
- `/api/color` - Color info
- `/api/useragent` - Parse UA
- `/api/qr` - QR code

### 😂 Memes / Internet
- `/api/chucknorris` - Chuck Norris joke
- `/api/insult` - Random insult
- `/api/compliment` - Random compliment
- `/api/pickup` - Pickup line
- `/api/programmingjoke` - Programming joke
- `/api/motivational` - Motivational message
- `/api/fact` - Random fact
- `/api/roast` - Roast
- `/api/wyr` - Would You Rather
- `/api/dadjoke` - Dad joke

### ✍️ Text / AI-ish
- `/api/reverse` - Reverse text
- `/api/base64` - Encode/decode Base64
- `/api/leet` - Convert to leetspeak
- `/api/shuffle` - Shuffle letters
- `/api/repeat` - Repeat text
- `/api/shorten` - Shorten URL
- `/api/expand` - Expand URL
- `/api/hash` - Hash generator
- `/api/translate` - Translate text
- `/api/lorem` - Lorem ipsum

## 🏗️ Project Structure

```
nekoql/
├── backend/                 # TypeScript Express API
│   ├── src/
│   │   ├── endpoints/      # Individual endpoint handlers
│   │   ├── middleware/     # Response format middleware
│   │   └── index.ts        # Main server file
│   ├── package.json
│   └── tsconfig.json
├── frontend/               # React + TailwindCSS
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   └── main.tsx       # App entry point
│   ├── package.json
│   └── vite.config.ts
├── package.json           # Root workspace config
└── README.md
```

## 🔧 Development

### Adding New Endpoints

1. Create a new file in `backend/src/endpoints/`
2. Export `handler` and `documentation` objects
3. Import and register in `backend/src/index.ts`

Example endpoint:

```typescript
// backend/src/endpoints/flip.ts
import { Request, Response } from "express";

export const handler = (req: Request, res: Response) => {
  const result = Math.random() > 0.5 ? 'heads' : 'tails';
  
  res.json({
    result: result,
    type: "coin_flip"
  });
};

export const documentation = {
  name: "Coin Flip",
  description: "Flip a coin and get heads or tails",
  endpoint: "/api/flip",
  method: "GET",
  queryParams: {},
  exampleRequest: "/api/flip",
  exampleResponse: {
    result: "heads",
    type: "coin_flip"
  },
  category: "Fun & Games"
};
```

### Running Tests

```bash
# Backend tests
cd backend && npm test

# Frontend tests
cd frontend && npm test
```

### Building for Production

```bash
# Build both frontend and backend
npm run build

# Start production server
npm start
```

## 🎨 Customization

### Theme Colors

Edit `frontend/tailwind.config.js` to customize the neko theme:

```javascript
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
```

### Adding Response Formats

Extend the middleware in `backend/src/middleware/formatResponse.ts`:

```typescript
// Add new format support
if (format === "xml") {
  res.type("application/xml");
  return res.send(convertToXml(data));
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-endpoint`)
3. Commit your changes (`git commit -m 'Add amazing endpoint'`)
4. Push to the branch (`git push origin feature/amazing-endpoint`)
5. Open a Pull Request

### Endpoint Guidelines

- Keep endpoints simple and focused
- Include proper error handling
- Add comprehensive documentation
- Test with different response formats
- Follow the existing naming conventions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the cute neko aesthetic
- Built with modern web technologies
- Thanks to all the open source contributors

## 🐛 Issues & Support

Found a bug or have a feature request? Please [open an issue](https://github.com/your-username/nekoql/issues)!

---

Made with ❤️ and 🐾 by the nekoQL team