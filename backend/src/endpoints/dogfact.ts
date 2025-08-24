import { Request, Response } from "express";

const dogFacts = [
  "Dogs' sense of smell is about 40 times greater than humans.",
  "Dogs can hear sounds up to 4 times farther than humans.",
  "A dog's nose print is unique, just like a human's fingerprint.",
  "Dogs have three eyelids.",
  "Dogs can see in color, but not as vividly as humans.",
  "A dog's heart beats between 70 and 120 times per minute.",
  "Dogs can dream just like humans do.",
  "The average dog can run about 19 mph.",
  "Dogs have about 1,700 taste buds (humans have about 9,000).",
  "Dogs can understand up to 250 words and gestures.",
  "A dog's sense of smell is so strong it can detect cancer.",
  "Dogs can see better in the dark than humans.",
  "Dogs have 42 teeth as adults.",
  "Dogs can smell fear in humans.",
  "A dog's tail wagging to the right means they're happy, to the left means they're scared."
];

export const handler = (req: Request, res: Response) => {
  const fact = dogFacts[Math.floor(Math.random() * dogFacts.length)];
  
  res.json({
    fact: fact,
    type: "dog_fact"
  });
};

export const documentation = {
  name: "Random Dog Fact",
  description: "Get a random interesting fact about dogs",
  endpoint: "/api/dogfact",
  method: "GET",
  queryParams: {},
  exampleRequest: "/api/dogfact",
  exampleResponse: {
    fact: "Dogs' sense of smell is about 40 times greater than humans.",
    type: "dog_fact"
  },
  category: "Animals"
};