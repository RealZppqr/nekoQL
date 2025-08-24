import { Request, Response } from "express";

export const handler = (req: Request, res: Response) => {
  const now = new Date();
  const timezone = req.query.timezone as string || 'UTC';
  
  res.json({
    timestamp: now.toISOString(),
    unix: Math.floor(now.getTime() / 1000),
    timezone: timezone,
    time: now.toLocaleTimeString('en-US', { timeZone: timezone }),
    date: now.toLocaleDateString('en-US', { timeZone: timezone }),
    day: now.toLocaleDateString('en-US', { weekday: 'long', timeZone: timezone }),
    type: "time"
  });
};

export const documentation = {
  name: "Current Time",
  description: "Get current time information in various formats",
  endpoint: "/api/time",
  method: "GET",
  queryParams: {
    timezone: "string (optional) - Timezone (e.g., 'America/New_York', 'Europe/London')"
  },
  exampleRequest: "/api/time?timezone=America/New_York",
  exampleResponse: {
    timestamp: "2024-01-15T10:30:00.000Z",
    unix: 1705312200,
    timezone: "America/New_York",
    time: "5:30:00 AM",
    date: "1/15/2024",
    day: "Monday",
    type: "time"
  },
  category: "Utility"
};