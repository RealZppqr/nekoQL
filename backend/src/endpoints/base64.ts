import { Request, Response } from "express";

export const handler = (req: Request, res: Response) => {
  const text = req.query.text as string;
  const action = req.query.action as string || 'encode';
  
  if (!text) {
    return res.status(400).json({
      error: "Text parameter is required",
      example: "/api/base64?text=hello&action=encode"
    });
  }
  
  let result = '';
  let isEncoded = false;
  
  try {
    if (action === 'decode') {
      // Try to decode
      result = Buffer.from(text, 'base64').toString('utf-8');
      isEncoded = false;
    } else {
      // Encode
      result = Buffer.from(text, 'utf-8').toString('base64');
      isEncoded = true;
    }
  } catch (error) {
    return res.status(400).json({
      error: "Invalid base64 string for decoding",
      example: "/api/base64?text=aGVsbG8=&action=decode"
    });
  }
  
  res.json({
    original: text,
    result: result,
    action: action,
    isEncoded: isEncoded,
    type: "base64"
  });
};

export const documentation = {
  name: "Base64 Encode/Decode",
  description: "Encode text to base64 or decode base64 to text",
  endpoint: "/api/base64",
  method: "GET",
  queryParams: {
    text: "string (required) - Text to encode or base64 to decode",
    action: "string (optional) - 'encode' or 'decode' (default: 'encode')"
  },
  exampleRequest: "/api/base64?text=hello&action=encode",
  exampleResponse: {
    original: "hello",
    result: "aGVsbG8=",
    action: "encode",
    isEncoded: true,
    type: "base64"
  },
  category: "Text / AI-ish"
};