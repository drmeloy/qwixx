import express from 'express';
import gameRoutes from './routes/gameRoutes';
import userRoutes from './routes/userRoutes';

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())

app.use('/api/user', userRoutes);
app.use('/api/game', gameRoutes);

app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;