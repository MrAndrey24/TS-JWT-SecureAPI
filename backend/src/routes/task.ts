import express from 'express';
import { createTaskController, updateTaskController, deleteTaskController } from '../controllers/task.controller'
import { TokenValidation } from '../middleware/validate.token';

const router = express.Router();

router.post('/', TokenValidation ,createTaskController);
router.put('/', updateTaskController);
router.delete('/', deleteTaskController);

export default router;