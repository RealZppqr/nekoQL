import { Request, Response } from "express";

export const handler = (req: Request, res: Response) => {
  const text = req.query.text as string;
  
  if (!text) {
    return res.status(400).json({
      error: "Text parameter is required",
      example: "/api/reverse?text=hello"
    });
  }
  
  const reversed = text.split('').reverse().join('');
  
  res.json({
    original: text,
    reversed: reversed,
    length: text.length,
    type: "text_reverse"
  });
};

export const documentation = {
  name: "Text Reverse",
  description: "Reverse any text string",
  endpoint: "/api/reverse",
  method: "GET",
  queryParams: {
    text: "string (required) - Text to reverse"
  },
  exampleRequest: "/api/reverse?text=hello",
  exampleResponse: {
    original: "hello",
    reversed: "olleh",
    length: 5,
    type: "text_reverse"
  },
  category: "Text / AI-ish"
};