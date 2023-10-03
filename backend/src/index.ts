import express from 'express';
import { env } from 'process';

const app = express();
app.use(express.json());


const port = env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});