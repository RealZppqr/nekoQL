import { Request, Response } from "express";

const dares = [
  "Sing a song out loud for 30 seconds",
  "Do 10 jumping jacks",
  "Tell a joke to the group",
  "Dance for 30 seconds",
  "Make a funny face and hold it for 10 seconds",
  "Speak in a different accent for the next 3 rounds",
  "Let someone tickle you for 10 seconds",
  "Do your best impression of someone famous",
  "Let someone draw on your face with a marker",
  "Wear your clothes backwards for the next round",
  "Let someone style your hair however they want",
  "Do a handstand against the wall",
  "Let someone blindfold you and feed you something",
  "Do your best animal impression",
  "Let someone take a silly photo of you"
];

export const handler = (req: Request, res: Response) => {
  const dare = dares[Math.floor(Math.random() * dares.length)];
  
  res.json({
    challenge: dare,
    type: "dare"
  });
};

export const documentation = {
  name: "Random Dare",
  description: "Get a random dare challenge for truth or dare games",
  endpoint: "/api/dare",
  method: "GET",
  queryParams: {},
  exampleRequest: "/api/dare",
  exampleResponse: {
    challenge: "Sing a song out loud for 30 seconds",
    type: "dare"
  },
  category: "Fun & Games"
};