import { Request, Response } from "express";
import axios from "axios";

export const handler = async (req: Request, res: Response) => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search');
    const catData = response.data[0];
    
    res.json({
      id: catData.id,
      url: catData.url,
      width: catData.width,
      height: catData.height,
      type: "cat"
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch cat image",
      fallback: "https://placekitten.com/400/300"
    });
  }
};

export const documentation = {
  name: "Random Cat",
  description: "Get a random cat image",
  endpoint: "/api/cat",
  method: "GET",
  queryParams: {},
  exampleRequest: "/api/cat",
  exampleResponse: {
    id: "abc123",
    url: "https://cdn2.thecatapi.com/images/abc123.jpg",
    width: 800,
    height: 600,
    type: "cat"
  },
  category: "Animals"
};