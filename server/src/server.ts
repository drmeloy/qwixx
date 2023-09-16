import express from 'express';
import gameRoutes from './routes/gameRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api/game', gameRoutes)

app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;