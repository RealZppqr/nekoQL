import { Request, Response } from "express";

const memes = [
  {
    title: "Distracted Boyfriend",
    url: "https://i.imgflip.com/1ur9b0.jpg",
    description: "The classic distracted boyfriend meme"
  },
  {
    title: "Two Buttons",
    url: "https://i.imgflip.com/1g8my4.jpg",
    description: "The two buttons meme"
  },
  {
    title: "Drake Hotline Bling",
    url: "https://i.imgflip.com/30b1gx.jpg",
    description: "Drake approving/disapproving meme"
  },
  {
    title: "Running Away Balloon",
    url: "https://i.imgflip.com/261o3j.jpg",
    description: "Balloon running away meme"
  },
  {
    title: "Ancient Aliens",
    url: "https://i.imgflip.com/26am.jpg",
    description: "Ancient aliens guy meme"
  },
  {
    title: "Maury Lie Detector",
    url: "https://i.imgflip.com/1g8my4.jpg",
    description: "Maury Povich lie detector meme"
  },
  {
    title: "So Hot Right Now",
    url: "https://i.imgflip.com/1jwhww.jpg",
    description: "Zoolander so hot right now meme"
  },
  {
    title: "Yoda",
    url: "https://i.imgflip.com/345v7q.jpg",
    description: "Yoda meme"
  },
  {
    title: "One Does Not Simply",
    url: "https://i.imgflip.com/1bhk.jpg",
    description: "Lord of the Rings one does not simply meme"
  },
  {
    title: "Success Kid",
    url: "https://i.imgflip.com/1bhk.jpg",
    description: "Success kid meme"
  }
];

export const handler = (req: Request, res: Response) => {
  const meme = memes[Math.floor(Math.random() * memes.length)];
  
  res.json({
    title: meme.title,
    url: meme.url,
    description: meme.description,
    type: "meme"
  });
};

export const documentation = {
  name: "Random Meme",
  description: "Get a random popular meme",
  endpoint: "/api/meme",
  method: "GET",
  queryParams: {},
  exampleRequest: "/api/meme",
  exampleResponse: {
    title: "Distracted Boyfriend",
    url: "https://i.imgflip.com/1ur9b0.jpg",
    description: "The classic distracted boyfriend meme",
    type: "meme"
  },
  category: "Fun & Games"
};