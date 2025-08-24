import { Request, Response } from "express";

/**
 * Template for creating new endpoints
 * 
 * Steps to add a new endpoint:
 * 1. Copy this file and rename it to your endpoint name
 * 2. Implement the handler function
 * 3. Update the documentation object
 * 4. Import and register in src/index.ts
 */

export const handler = (req: Request, res: Response) => {
  // Get query parameters
  const param1 = req.query.param1 as string;
  const param2 = req.query.param2 as string;
  
  // Your endpoint logic here
  const result = {
    message: "Hello from your new endpoint!",
    param1: param1,
    param2: param2,
    timestamp: new Date().toISOString(),
    type: "your_endpoint_type"
  };
  
  // Return the response
  res.json(result);
};

export const documentation = {
  name: "Your Endpoint Name",
  description: "A brief description of what this endpoint does",
  endpoint: "/api/your-endpoint",
  method: "GET",
  queryParams: {
    param1: "string (optional) - Description of param1",
    param2: "string (optional) - Description of param2"
  },
  exampleRequest: "/api/your-endpoint?param1=value1&param2=value2",
  exampleResponse: {
    message: "Hello from your new endpoint!",
    param1: "value1",
    param2: "value2",
    timestamp: "2024-01-15T10:30:00.000Z",
    type: "your_endpoint_type"
  },
  category: "Choose from: Fun & Games, Animals, Utility, Memes / Internet, Text / AI-ish"
};

/**
 * Example categories and their endpoints:
 * 
 * Fun & Games: 8ball, roll, flip, rps, truth, dare, joke, meme, showerthought, quote
 * Animals: cat, catfact, dog, dogfact, fox, foxfact, panda, bird, animalfact, neko
 * Utility: ip, uuid, time, date, weather, crypto, currency, color, useragent, qr
 * Memes / Internet: chucknorris, insult, compliment, pickup, programmingjoke, motivational, fact, roast, wyr, dadjoke
 * Text / AI-ish: reverse, base64, leet, shuffle, repeat, shorten, expand, hash, translate, lorem
 */