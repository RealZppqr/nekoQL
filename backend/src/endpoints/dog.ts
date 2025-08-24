import { Request, Response } from "express";
import axios from "axios";

export const handler = async (req: Request, res: Response) => {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    const dogData = response.data;
    
    res.json({
      url: dogData.message,
      status: dogData.status,
      type: "dog"
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch dog image",
      fallback: "https://images.dog.ceo/breeds/retriever-golden/n02099601_1024.jpg",
      type: "dog"
    });
  }
};

export const documentation = {
  name: "Random Dog",
  description: "Get a random dog image",
  endpoint: "/api/dog",
  method: "GET",
  queryParams: {},
  exampleRequest: "/api/dog",
  exampleResponse: {
    url: "https://images.dog.ceo/breeds/retriever-golden/n02099601_1024.jpg",
    status: "success",
    type: "dog"
  },
  category: "Animals"
};