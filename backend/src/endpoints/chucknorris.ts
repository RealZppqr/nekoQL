import { Request, Response } from "express";

const chuckJokes = [
  "Chuck Norris can divide by zero.",
  "Chuck Norris doesn't read books. He stares them down until he gets the information he wants.",
  "Chuck Norris can slam a revolving door.",
  "Chuck Norris can kill two stones with one bird.",
  "Chuck Norris can unscramble an egg.",
  "Chuck Norris can make a fire by rubbing two ice cubes together.",
  "Chuck Norris can win a game of Connect Four in three moves.",
  "Chuck Norris can speak braille.",
  "Chuck Norris can hear sign language.",
  "Chuck Norris can see through walls. And punch through them.",
  "Chuck Norris can strangle you with a cordless phone.",
  "Chuck Norris can kill your imaginary friends.",
  "Chuck Norris can touch MC Hammer.",
  "Chuck Norris can slam a revolving door.",
  "Chuck Norris can make onions cry."
];

export const handler = (req: Request, res: Response) => {
  const joke = chuckJokes[Math.floor(Math.random() * chuckJokes.length)];
  
  res.json({
    joke: joke,
    type: "chuck_norris"
  });
};

export const documentation = {
  name: "Chuck Norris Joke",
  description: "Get a random Chuck Norris joke",
  endpoint: "/api/chucknorris",
  method: "GET",
  queryParams: {},
  exampleRequest: "/api/chucknorris",
  exampleResponse: {
    joke: "Chuck Norris can divide by zero.",
    type: "chuck_norris"
  },
  category: "Memes / Internet"
};