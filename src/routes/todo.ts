import express, { Request, Response } from 'express';
import { TodoModel } from '../models/todo';

const router = express.Router();

router.get('/api/todo', [], (req: Request, res: Response) => {
  return res.send("The todo");
});

router.post('/api/todo', async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const todo = TodoModel.build({ title, description });
  await todo.save();
  return res.status(201).send(todo);
});

export { router as todoRouter };  