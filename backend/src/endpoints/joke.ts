import { Request, Response } from "express";

const cleanJokes = [
  {
    setup: "Why don't scientists trust atoms?",
    punchline: "Because they make up everything!"
  },
  {
    setup: "Why did the scarecrow win an award?",
    punchline: "Because he was outstanding in his field!"
  },
  {
    setup: "What do you call a fake noodle?",
    punchline: "An impasta!"
  },
  {
    setup: "Why did the math book look so sad?",
    punchline: "Because it had too many problems!"
  },
  {
    setup: "What do you call a bear with no teeth?",
    punchline: "A gummy bear!"
  },
  {
    setup: "Why don't eggs tell jokes?",
    punchline: "They'd crack each other up!"
  },
  {
    setup: "What do you call a dinosaur that crashes his car?",
    punchline: "Tyrannosaurus wrecks!"
  },
  {
    setup: "Why did the cookie go to the doctor?",
    punchline: "Because it was feeling crumbly!"
  }
];

const nsfwJokes = [
  {
    setup: "Why did the programmer quit his job?",
    punchline: "Because he didn't get arrays!"
  },
  {
    setup: "What do you call a computer that sings?",
    punchline: "A Dell!"
  }
];

export const handler = (req: Request, res: Response) => {
  const nsfw = req.query.nsfw === 'true';
  const jokes = nsfw ? [...cleanJokes, ...nsfwJokes] : cleanJokes;
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  
  res.json({
    setup: joke.setup,
    punchline: joke.punchline,
    nsfw: nsfw,
    type: "joke"
  });
};

export const documentation = {
  name: "Random Joke",
  description: "Get a random joke (with optional NSFW content)",
  endpoint: "/api/joke",
  method: "GET",
  queryParams: {
    nsfw: "boolean (optional) - Include NSFW jokes (default: false)"
  },
  exampleRequest: "/api/joke?nsfw=true",
  exampleResponse: {
    setup: "Why don't scientists trust atoms?",
    punchline: "Because they make up everything!",
    nsfw: false,
    type: "joke"
  },
  category: "Fun & Games"
};