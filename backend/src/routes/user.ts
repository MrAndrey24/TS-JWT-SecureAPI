import { getUsersController ,createUserController, updateUserController, deleteUserController } from '../controllers/userController'
import express from 'express';

const router = express.Router();

router.get('/', getUsersController);
router.post('/', createUserController);
router.put('/:id', updateUserController);
router.delete('/:id', deleteUserController);

export default router;