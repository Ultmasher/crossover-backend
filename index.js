import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import questionsRouter from './routes/questionsRouter.js';

dotenv.config();
const port = 3000;
const app = express();

app.use(cors());
app.use('/', questionsRouter);
app.use(express.json());

app.get('/', (req , res) => {
    res.send('Welcome to the Crossover Quiz API');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

