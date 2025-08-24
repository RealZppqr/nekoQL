import { Request, Response } from "express";

export const handler = (req: Request, res: Response) => {
  const sides = parseInt(req.query.sides as string) || 6;
  const count = parseInt(req.query.count as string) || 1;
  
  if (sides < 2) {
    return res.status(400).json({
      error: "Dice must have at least 2 sides"
    });
  }
  
  if (count < 1 || count > 100) {
    return res.status(400).json({
      error: "Count must be between 1 and 100"
    });
  }
  
  const rolls = Array.from({ length: count }, () => 
    Math.floor(Math.random() * sides) + 1
  );
  
  const total = rolls.reduce((sum, roll) => sum + roll, 0);
  
  res.json({
    sides: sides,
    count: count,
    rolls: rolls,
    total: total,
    type: "dice"
  });
};

export const documentation = {
  name: "Dice Roll",
  description: "Roll dice with customizable sides and count",
  endpoint: "/api/roll",
  method: "GET",
  queryParams: {
    sides: "number (optional, default: 6) - Number of sides on the dice",
    count: "number (optional, default: 1) - Number of dice to roll"
  },
  exampleRequest: "/api/roll?sides=20&count=3",
  exampleResponse: {
    sides: 20,
    count: 3,
    rolls: [15, 7, 19],
    total: 41,
    type: "dice"
  },
  category: "Fun & Games"
};