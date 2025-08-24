import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { formatResponse } from "./middleware/formatResponse";

// Import endpoints
import { handler as eightBallHandler, documentation as eightBallDoc } from "./endpoints/8ball";
import { handler as rollHandler, documentation as rollDoc } from "./endpoints/roll";
import { handler as catHandler, documentation as catDoc } from "./endpoints/cat";
import { handler as ipHandler, documentation as ipDoc } from "./endpoints/ip";
import { handler as uuidHandler, documentation as uuidDoc } from "./endpoints/uuid";
import { handler as flipHandler, documentation as flipDoc } from "./endpoints/flip";
import { handler as timeHandler, documentation as timeDoc } from "./endpoints/time";
import { handler as rpsHandler, documentation as rpsDoc } from "./endpoints/rps";
import { handler as truthHandler, documentation as truthDoc } from "./endpoints/truth";
import { handler as dareHandler, documentation as dareDoc } from "./endpoints/dare";
import { handler as jokeHandler, documentation as jokeDoc } from "./endpoints/joke";
import { handler as catfactHandler, documentation as catfactDoc } from "./endpoints/catfact";
import { handler as dogHandler, documentation as dogDoc } from "./endpoints/dog";
import { handler as dogfactHandler, documentation as dogfactDoc } from "./endpoints/dogfact";
import { handler as dateHandler, documentation as dateDoc } from "./endpoints/date";
import { handler as colorHandler, documentation as colorDoc } from "./endpoints/color";
import { handler as chucknorrisHandler, documentation as chucknorrisDoc } from "./endpoints/chucknorris";
import { handler as insultHandler, documentation as insultDoc } from "./endpoints/insult";
import { handler as complimentHandler, documentation as complimentDoc } from "./endpoints/compliment";
import { handler as reverseHandler, documentation as reverseDoc } from "./endpoints/reverse";
import { handler as base64Handler, documentation as base64Doc } from "./endpoints/base64";
import { handler as loremHandler, documentation as loremDoc } from "./endpoints/lorem";
import { handler as memeHandler, documentation as memeDoc } from "./endpoints/meme";
import { handler as showerthoughtHandler, documentation as showerthoughtDoc } from "./endpoints/showerthought";
import { handler as quoteHandler, documentation as quoteDoc } from "./endpoints/quote";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(formatResponse);

// Store all endpoint documentation
const endpoints = [
  eightBallDoc,
  rollDoc,
  catDoc,
  ipDoc,
  uuidDoc,
  flipDoc,
  timeDoc,
  rpsDoc,
  truthDoc,
  dareDoc,
  jokeDoc,
  catfactDoc,
  dogDoc,
  dogfactDoc,
  dateDoc,
  colorDoc,
  chucknorrisDoc,
  insultDoc,
  complimentDoc,
  reverseDoc,
  base64Doc,
  loremDoc,
  memeDoc,
  showerthoughtDoc,
  quoteDoc
];

// API Routes
app.get("/api/8ball", eightBallHandler);
app.get("/api/roll", rollHandler);
app.get("/api/cat", catHandler);
app.get("/api/ip", ipHandler);
app.get("/api/uuid", uuidHandler);
app.get("/api/flip", flipHandler);
app.get("/api/time", timeHandler);
app.get("/api/rps", rpsHandler);
app.get("/api/truth", truthHandler);
app.get("/api/dare", dareHandler);
app.get("/api/joke", jokeHandler);
app.get("/api/catfact", catfactHandler);
app.get("/api/dog", dogHandler);
app.get("/api/dogfact", dogfactHandler);
app.get("/api/date", dateHandler);
app.get("/api/color", colorHandler);
app.get("/api/chucknorris", chucknorrisHandler);
app.get("/api/insult", insultHandler);
app.get("/api/compliment", complimentHandler);
app.get("/api/reverse", reverseHandler);
app.get("/api/base64", base64Handler);
app.get("/api/lorem", loremHandler);
app.get("/api/meme", memeHandler);
app.get("/api/showerthought", showerthoughtHandler);
app.get("/api/quote", quoteHandler);

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: "1.0.0"
  });
});

// API documentation endpoint
app.get("/api/docs", (req, res) => {
  res.json({
    name: "nekoQL API",
    description: "🐾 A cute neko-themed public API provider",
    version: "1.0.0",
    endpoints: endpoints,
    total: endpoints.length,
    categories: [...new Set(endpoints.map(ep => ep.category))],
    responseFormats: ["json", "yaml", "toml"],
    example: "/api/8ball?response=yaml"
  });
});

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "🐾 Welcome to nekoQL!",
    description: "A cute neko-themed public API provider",
    documentation: "/api/docs",
    health: "/api/health",
    github: "https://github.com/your-username/nekoql",
    endpoints: endpoints.length
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    error: "Endpoint not found",
    available: endpoints.map(ep => ep.endpoint),
    docs: "/api/docs"
  });
});

// Error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Something went wrong!",
    message: process.env.NODE_ENV === "development" ? err.message : "Internal server error"
  });
});

app.listen(PORT, () => {
  console.log(`🐾 nekoQL server running on port ${PORT}`);
  console.log(`📚 API Documentation: http://localhost:${PORT}/api/docs`);
  console.log(`🏥 Health Check: http://localhost:${PORT}/api/health`);
});