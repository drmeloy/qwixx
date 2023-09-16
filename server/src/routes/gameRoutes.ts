import { Router } from 'express';
import { startGame } from '../controllers/gameController';

const router = Router();

router.post('/start-game', startGame);

export default router;