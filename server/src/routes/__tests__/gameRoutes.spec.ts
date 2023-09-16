import request from 'supertest';
import app from '../../server';

describe('Game Routes', () => {
  it('should start a new game', async () => {
    const res = await request(app).post('/api/game/start-game');
    expect(res.status).toBe(200);
    expect(res.text).toBe('New game started!');
  });
});