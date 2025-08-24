import { Request, Response } from "express";

const quotes = [
  {
    text: "Be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair"
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb"
  },
  {
    text: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington"
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  }
];

export const handler = (req: Request, res: Response) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  
  res.json({
    quote: quote.text,
    author: quote.author,
    type: "quote"
  });
};

export const documentation = {
  name: "Random Quote",
  description: "Get a random inspirational quote",
  endpoint: "/api/quote",
  method: "GET",
  queryParams: {},
  exampleRequest: "/api/quote",
  exampleResponse: {
    quote: "Be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
    type: "quote"
  },
  category: "Fun & Games"
};