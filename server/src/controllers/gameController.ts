import { Request, Response } from 'express';

export const startGame = (req: Request, res: Response) => {
  // Add logic to start a new game here

  res.send('New game started!')
};
