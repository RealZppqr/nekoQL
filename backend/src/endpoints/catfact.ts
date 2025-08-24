import { Request, Response } from "express";

const catFacts = [
  "Cats spend 70% of their lives sleeping.",
  "A cat's purr vibrates at a frequency that promotes bone healing.",
  "Cats have over 20 muscles that control their ears.",
  "A cat's nose print is unique, just like a human's fingerprint.",
  "Cats can't taste sweetness.",
  "A cat's whiskers help them determine if they can fit through a space.",
  "Cats have a third eyelid called a nictitating membrane.",
  "A group of cats is called a 'clowder'.",
  "Cats can rotate their ears 180 degrees.",
  "A cat's heart beats twice as fast as a human's heart.",
  "Cats can jump up to 6 times their body length.",
  "Cats have over 100 different vocal sounds.",
  "A cat's tail contains nearly 10% of all the bones in its body.",
  "Cats can see in near darkness.",
  "Cats spend 30-50% of their day grooming themselves."
];

export const handler = (req: Request, res: Response) => {
  const fact = catFacts[Math.floor(Math.random() * catFacts.length)];
  
  res.json({
    fact: fact,
    type: "cat_fact"
  });
};

export const documentation = {
  name: "Random Cat Fact",
  description: "Get a random interesting fact about cats",
  endpoint: "/api/catfact",
  method: "GET",
  queryParams: {},
  exampleRequest: "/api/catfact",
  exampleResponse: {
    fact: "Cats spend 70% of their lives sleeping.",
    type: "cat_fact"
  },
  category: "Animals"
};