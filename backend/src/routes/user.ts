import express from 'express';
import { updateUserController, deleteUserController } from '../controllers/user.controller'
import { TokenValidation } from '../middleware/validate.token';

const router = express.Router();


router.put('/:id', TokenValidation ,updateUserController);
router.delete('/:id', TokenValidation ,deleteUserController);

export default router;