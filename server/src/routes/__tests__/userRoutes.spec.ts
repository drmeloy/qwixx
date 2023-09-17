import request from 'supertest';
import app from '../../server';
import { signUp, logIn } from '../../controllers/userController';

describe('User Routes', () => {
  it('should sign up a new user', async () => {
    const res = await request(app)
      .post('/api/user/signup')
      .send({ email: 'test@example.com', password: 'testpassword' });

    expect(res.status).toBe(201);
    expect(res.body.token).toBeDefined();
  });

  it('should log in an existing user', async () => {
    const res = await request(app)
      .post('/api/user/login')
      .send({ email: 'test@example.com', password: 'testpassword' });

    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  it('should return a 401 status for incorrect login', async () => {
    const res = await request(app)
      .post('/api/user/login')
      .send({ email: 'wrong@example.com', password: 'wrongpassword' });

    expect(res.status).toBe(401);
    expect(res.body.token).toBeUndefined();
  });
});