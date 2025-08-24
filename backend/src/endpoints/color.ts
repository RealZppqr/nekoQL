import { Request, Response } from "express";

export const handler = (req: Request, res: Response) => {
  const hex = req.query.hex as string;
  
  if (!hex || !/^[0-9A-Fa-f]{6}$/.test(hex)) {
    return res.status(400).json({
      error: "Invalid hex color. Please provide a 6-digit hex color (e.g., ff00ff)",
      example: "/api/color?hex=ff00ff"
    });
  }
  
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  // Calculate complementary color
  const compR = (255 - r).toString(16).padStart(2, '0');
  const compG = (255 - g).toString(16).padStart(2, '0');
  const compB = (255 - b).toString(16).padStart(2, '0');
  
  res.json({
    hex: hex.toUpperCase(),
    rgb: { r, g, b },
    hsl: rgbToHsl(r, g, b),
    complementary: `${compR}${compG}${compB}`.toUpperCase(),
    type: "color"
  });
};

function rgbToHsl(r: number, g: number, b: number) {
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;
  
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

export const documentation = {
  name: "Color Information",
  description: "Get information about a hex color including RGB, HSL, and complementary color",
  endpoint: "/api/color",
  method: "GET",
  queryParams: {
    hex: "string (required) - 6-digit hex color (e.g., 'ff00ff')"
  },
  exampleRequest: "/api/color?hex=ff00ff",
  exampleResponse: {
    hex: "FF00FF",
    rgb: { r: 255, g: 0, b: 255 },
    hsl: { h: 300, s: 100, l: 50 },
    complementary: "00FF00",
    type: "color"
  },
  category: "Utility"
};