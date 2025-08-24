import { Request, Response } from "express";

export const handler = (req: Request, res: Response) => {
  const ip = req.ip || 
             req.connection.remoteAddress || 
             req.socket.remoteAddress || 
             (req.connection as any).socket?.remoteAddress || 
             "Unknown";
  
  res.json({
    ip: ip.replace(/^::ffff:/, ''), // Remove IPv6 prefix
    userAgent: req.get('User-Agent'),
    language: req.get('Accept-Language'),
    type: "ip"
  });
};

export const documentation = {
  name: "IP Address",
  description: "Get the client's IP address and request information",
  endpoint: "/api/ip",
  method: "GET",
  queryParams: {},
  exampleRequest: "/api/ip",
  exampleResponse: {
    ip: "192.168.1.1",
    userAgent: "Mozilla/5.0...",
    language: "en-US,en;q=0.9",
    type: "ip"
  },
  category: "Utility"
};