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