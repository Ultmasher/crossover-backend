import express from 'express';
import getQuestions from '../controllers/quizController.js';

const questionsRouter = express.Router();

questionsRouter.get('/quiz', getQuestions);
questionsRouter.get('/', getQuestions);

export default questionsRouter;