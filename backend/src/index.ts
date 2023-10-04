import express from 'express';
import { env } from 'process';
import userRouter from './routes/user';
import taskRouter from './routes/task';


const app = express();
app.use(express.json());

// Routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/tasks', taskRouter);


const port = env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});