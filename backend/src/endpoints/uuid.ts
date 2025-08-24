import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export const handler = (req: Request, res: Response) => {
  const count = parseInt(req.query.count as string) || 1;
  
  if (count < 1 || count > 100) {
    return res.status(400).json({
      error: "Count must be between 1 and 100"
    });
  }
  
  const uuids = Array.from({ length: count }, () => uuidv4());
  
  res.json({
    count: count,
    uuids: count === 1 ? uuids[0] : uuids,
    type: "uuid"
  });
};

export const documentation = {
  name: "UUID Generator",
  description: "Generate random UUIDs (v4)",
  endpoint: "/api/uuid",
  method: "GET",
  queryParams: {
    count: "number (optional, default: 1) - Number of UUIDs to generate"
  },
  exampleRequest: "/api/uuid?count=3",
  exampleResponse: {
    count: 3,
    uuids: [
      "550e8400-e29b-41d4-a716-446655440000",
      "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
      "6ba7b811-9dad-11d1-80b4-00c04fd430c8"
    ],
    type: "uuid"
  },
  category: "Utility"
};