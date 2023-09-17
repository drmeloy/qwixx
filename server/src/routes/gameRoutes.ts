import express from 'express';
import { startGame } from '../controllers/gameController';

const router = express.Router();

router.post('/start-game', startGame);

export default router;