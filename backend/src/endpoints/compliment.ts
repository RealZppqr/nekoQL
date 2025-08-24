import { Request, Response } from "express";

const compliments = [
  "You're absolutely amazing!",
  "You have the most beautiful smile.",
  "You're incredibly intelligent and thoughtful.",
  "You make the world a better place just by being in it.",
  "You're stronger than you know.",
  "You have a heart of gold.",
  "You're capable of amazing things.",
  "You're inspiring to everyone around you.",
  "You have such a kind and gentle spirit.",
  "You're absolutely perfect just the way you are.",
  "You have incredible potential.",
  "You're a ray of sunshine on cloudy days.",
  "You have the most wonderful personality.",
  "You're absolutely stunning inside and out.",
  "You're a true gem and a rare find.",
  "You have such a beautiful soul.",
  "You're absolutely extraordinary.",
  "You have the most amazing energy.",
  "You're absolutely brilliant.",
  "You have such a wonderful sense of humor."
];

export const handler = (req: Request, res: Response) => {
  const compliment = compliments[Math.floor(Math.random() * compliments.length)];
  
  res.json({
    compliment: compliment,
    type: "compliment"
  });
};

export const documentation = {
  name: "Random Compliment",
  description: "Get a random compliment to brighten your day",
  endpoint: "/api/compliment",
  method: "GET",
  queryParams: {},
  exampleRequest: "/api/compliment",
  exampleResponse: {
    compliment: "You're absolutely amazing!",
    type: "compliment"
  },
  category: "Memes / Internet"
};