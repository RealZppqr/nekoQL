import { Request, Response } from "express";

const loremWords = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
  "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
  "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam", "quis", "nostrud",
  "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea",
  "commodo", "consequat", "duis", "aute", "irure", "dolor", "in", "reprehenderit",
  "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla",
  "pariatur", "excepteur", "sint", "occaecat", "cupidatat", "non", "proident",
  "sunt", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", "est",
  "laborum", "et", "dolore", "magna", "aliqua", "ut", "enim", "ad", "minim"
];

export const handler = (req: Request, res: Response) => {
  const words = parseInt(req.query.words as string) || 50;
  const paragraphs = parseInt(req.query.paragraphs as string) || 1;
  
  if (words < 1 || words > 1000) {
    return res.status(400).json({
      error: "Words must be between 1 and 1000"
    });
  }
  
  if (paragraphs < 1 || paragraphs > 20) {
    return res.status(400).json({
      error: "Paragraphs must be between 1 and 20"
    });
  }
  
  const generateParagraph = (wordCount: number) => {
    const result = [];
    for (let i = 0; i < wordCount; i++) {
      result.push(loremWords[Math.floor(Math.random() * loremWords.length)]);
    }
    return result.join(' ');
  };
  
  const wordsPerParagraph = Math.ceil(words / paragraphs);
  const text = Array.from({ length: paragraphs }, () => 
    generateParagraph(wordsPerParagraph)
  ).join('\n\n');
  
  res.json({
    text: text,
    words: words,
    paragraphs: paragraphs,
    type: "lorem"
  });
};

export const documentation = {
  name: "Lorem Ipsum",
  description: "Generate Lorem Ipsum placeholder text",
  endpoint: "/api/lorem",
  method: "GET",
  queryParams: {
    words: "number (optional, default: 50) - Number of words to generate",
    paragraphs: "number (optional, default: 1) - Number of paragraphs"
  },
  exampleRequest: "/api/lorem?words=100&paragraphs=3",
  exampleResponse: {
    text: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    words: 100,
    paragraphs: 3,
    type: "lorem"
  },
  category: "Text / AI-ish"
};