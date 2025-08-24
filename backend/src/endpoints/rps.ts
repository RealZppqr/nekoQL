import { Request, Response } from "express";

const choices = ['rock', 'paper', 'scissors'];

export const handler = (req: Request, res: Response) => {
  const playerChoice = req.query.choice as string;
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
  let result = '';
  if (!playerChoice || !choices.includes(playerChoice.toLowerCase())) {
    result = 'invalid';
  } else {
    const player = playerChoice.toLowerCase();
    if (player === computerChoice) {
      result = 'tie';
    } else if (
      (player === 'rock' && computerChoice === 'scissors') ||
      (player === 'paper' && computerChoice === 'rock') ||
      (player === 'scissors' && computerChoice === 'paper')
    ) {
      result = 'win';
    } else {
      result = 'lose';
    }
  }
  
  res.json({
    player: playerChoice || 'none',
    computer: computerChoice,
    result: result,
    type: "rps"
  });
};

export const documentation = {
  name: "Rock Paper Scissors",
  description: "Play rock-paper-scissors against the computer",
  endpoint: "/api/rps",
  method: "GET",
  queryParams: {
    choice: "string (required) - Your choice: 'rock', 'paper', or 'scissors'"
  },
  exampleRequest: "/api/rps?choice=rock",
  exampleResponse: {
    player: "rock",
    computer: "scissors",
    result: "win",
    type: "rps"
  },
  category: "Fun & Games"
};