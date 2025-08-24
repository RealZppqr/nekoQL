import { Request, Response } from "express";

const insults = [
  "You're so slow, you could win a race against a statue.",
  "You're not the sharpest tool in the shed, you're the one that fell behind the shed.",
  "You're so dense, light bends around you.",
  "You're not the brightest crayon in the box, you're the one that's been eaten.",
  "You're so slow, you could win a race against a tree.",
  "You're not the fastest horse in the race, you're the one that's still in the stable.",
  "You're so dim, you make a black hole look bright.",
  "You're not the quickest bunny in the forest, you're the one that's still sleeping.",
  "You're so slow, you could win a race against a rock.",
  "You're not the smartest cookie in the jar, you're the one that's been dunked too many times.",
  "You're so dense, you could sink a battleship.",
  "You're not the brightest star in the sky, you're the one that's already burned out.",
  "You're so slow, you could win a race against a snail.",
  "You're not the fastest fish in the sea, you're the one that's still learning to swim.",
  "You're so dim, you make a candle look like a spotlight."
];

export const handler = (req: Request, res: Response) => {
  const insult = insults[Math.floor(Math.random() * insults.length)];
  
  res.json({
    insult: insult,
    type: "insult"
  });
};

export const documentation = {
  name: "Random Insult",
  description: "Get a random (playful) insult",
  endpoint: "/api/insult",
  method: "GET",
  queryParams: {},
  exampleRequest: "/api/insult",
  exampleResponse: {
    insult: "You're so slow, you could win a race against a statue.",
    type: "insult"
  },
  category: "Memes / Internet"
};