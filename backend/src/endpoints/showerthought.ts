import { Request, Response } from "express";

const showerThoughts = [
  "If you're waiting for the waiter, aren't you the waiter?",
  "A book is just a tree that had its feelings hurt.",
  "If you're not supposed to eat at night, why is there a light in the fridge?",
  "Why do we call it a building when it's already built?",
  "If you're not supposed to eat at night, why is there a light in the fridge?",
  "Why do we call it a building when it's already built?",
  "If you're not supposed to eat at night, why is there a light in the fridge?",
  "Why do we call it a building when it's already built?",
  "If you're not supposed to eat at night, why is there a light in the fridge?",
  "Why do we call it a building when it's already built?",
  "If you're not supposed to eat at night, why is there a light in the fridge?",
  "Why do we call it a building when it's already built?",
  "If you're not supposed to eat at night, why is there a light in the fridge?",
  "Why do we call it a building when it's already built?",
  "If you're not supposed to eat at night, why is there a light in the fridge?"
];

export const handler = (req: Request, res: Response) => {
  const thought = showerThoughts[Math.floor(Math.random() * showerThoughts.length)];
  
  res.json({
    thought: thought,
    type: "shower_thought"
  });
};

export const documentation = {
  name: "Shower Thought",
  description: "Get a random shower thought",
  endpoint: "/api/showerthought",
  method: "GET",
  queryParams: {},
  exampleRequest: "/api/showerthought",
  exampleResponse: {
    thought: "If you're waiting for the waiter, aren't you the waiter?",
    type: "shower_thought"
  },
  category: "Fun & Games"
};