import express from 'express';
import mongoose, { ConnectOptions, connect } from 'mongoose';
import { json } from 'body-parser';
import { todoRouter } from './routes/todo';

const port = 3000;

const app = express();

app.use(json());
app.use(todoRouter);

mongoose.connect("mongodb://localhost:27017/todo", {
  useUnifiedtopology: true,
} as ConnectOptions)
.then(() => {
  console.log("connected to MongoDB server....");
});

app.use((req, res, next) => {
  console.log(`middleware called with: ${req.method} ${req.url}`);
  next();
});

app.get('/user', (req, res, next) => {
  console.log(`/user called `);
  res.send("welcome user");
});

app.listen(port, () => {
  console.log(`listening on port ${port} ....`);
});