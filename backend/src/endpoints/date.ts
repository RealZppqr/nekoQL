import { Request, Response } from "express";

export const handler = (req: Request, res: Response) => {
  const now = new Date();
  const timezone = req.query.timezone as string || 'UTC';
  
  res.json({
    date: now.toLocaleDateString('en-US', { timeZone: timezone }),
    day: now.toLocaleDateString('en-US', { weekday: 'long', timeZone: timezone }),
    month: now.toLocaleDateString('en-US', { month: 'long', timeZone: timezone }),
    year: now.getFullYear(),
    timezone: timezone,
    unix: Math.floor(now.getTime() / 1000),
    type: "date"
  });
};

export const documentation = {
  name: "Current Date",
  description: "Get current date information in various formats",
  endpoint: "/api/date",
  method: "GET",
  queryParams: {
    timezone: "string (optional) - Timezone (e.g., 'America/New_York', 'Europe/London')"
  },
  exampleRequest: "/api/date?timezone=America/New_York",
  exampleResponse: {
    date: "1/15/2024",
    day: "Monday",
    month: "January",
    year: 2024,
    timezone: "America/New_York",
    unix: 1705312200,
    type: "date"
  },
  category: "Utility"
};