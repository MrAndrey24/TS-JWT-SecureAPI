import { createTaskController, updateTaskController, deleteTaskController } from '../controllers/taskController'
import express from 'express';

const router = express.Router();

router.post('/', createTaskController);
router.put('/:id', updateTaskController);
router.delete('/:id', deleteTaskController);

export default router;