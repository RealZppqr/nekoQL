import { Request, Response } from "express";

const responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

export const handler = (req: Request, res: Response) => {
  const question = req.query.question as string;
  const response = responses[Math.floor(Math.random() * responses.length)];
  
  res.json({
    question: question || "No question asked",
    answer: response,
    type: "8ball"
  });
};

export const documentation = {
  name: "8-Ball",
  description: "Get a random 8-ball response to your question",
  endpoint: "/api/8ball",
  method: "GET",
  queryParams: {
    question: "string (optional) - The question you want to ask the 8-ball"
  },
  exampleRequest: "/api/8ball?question=Will I win the lottery?",
  exampleResponse: {
    question: "Will I win the lottery?",
    answer: "It is certain",
    type: "8ball"
  },
  category: "Fun & Games"
};