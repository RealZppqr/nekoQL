import { Request, Response, NextFunction } from "express";
import yaml from "yaml";
import toml from "@iarna/toml";

export interface ApiResponse {
  success: boolean;
  data?: any;
  error?: string;
  timestamp: string;
  endpoint: string;
  format?: string;
}

export function formatResponse(req: Request, res: Response, next: NextFunction) {
  const originalJson = res.json.bind(res);
  
  res.json = (data: any) => {
    const format = (req.query.response || "json").toString().toLowerCase();
    
    // Create standardized response object
    const response: ApiResponse = {
      success: true,
      data: data,
      timestamp: new Date().toISOString(),
      endpoint: req.path,
      format: format
    };

    if (format === "yml" || format === "yaml") {
      res.type("text/yaml");
      return res.send(yaml.stringify(response));
    } else if (format === "toml") {
      res.type("text/plain");
      return res.send(toml.stringify(response));
    }
    
    return originalJson(response);
  };

  next();
}