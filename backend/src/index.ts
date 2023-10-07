import express from 'express';
import dotenv from "dotenv";
import userRouter from './routes/user';
import taskRouter from './routes/task';
import AuthRouter from './routes/auth'


const app = express();
app.use(express.json());

dotenv.config();

// Routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/tasks', taskRouter);
app.use('/api/v1/auth', AuthRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});