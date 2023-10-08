import express from 'express';
import { createTaskController, updateTaskController, deleteTaskController } from '../controllers/task.controller'
import { TokenValidation } from '../middleware/validate.token';

const router = express.Router();

router.post('/', TokenValidation ,createTaskController);
router.put('/:id', TokenValidation ,updateTaskController);
router.delete('/:id', TokenValidation ,deleteTaskController);

export default router;