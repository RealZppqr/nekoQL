import { Request, Response } from "express";

const truths = [
  "What's the most embarrassing thing that happened to you in school?",
  "What's the worst lie you've ever told?",
  "What's your biggest fear?",
  "What's the most trouble you've ever been in?",
  "What's your biggest regret?",
  "What's the most embarrassing thing in your search history?",
  "What's the worst thing you've ever done to someone?",
  "What's your biggest insecurity?",
  "What's the most embarrassing thing you've ever worn?",
  "What's the worst thing you've ever said to someone?",
  "What's your biggest pet peeve?",
  "What's the most embarrassing thing you've ever done in public?",
  "What's your biggest guilty pleasure?",
  "What's the worst thing you've ever eaten?",
  "What's your biggest fear about the future?"
];

export const handler = (req: Request, res: Response) => {
  const truth = truths[Math.floor(Math.random() * truths.length)];
  
  res.json({
    question: truth,
    type: "truth"
  });
};

export const documentation = {
  name: "Random Truth",
  description: "Get a random truth question for truth or dare games",
  endpoint: "/api/truth",
  method: "GET",
  queryParams: {},
  exampleRequest: "/api/truth",
  exampleResponse: {
    question: "What's the most embarrassing thing that happened to you in school?",
    type: "truth"
  },
  category: "Fun & Games"
};