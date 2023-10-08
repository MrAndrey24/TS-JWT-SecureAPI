import express from 'express';
import { signUp, signIn, profile} from '../controllers/auth.controller';
import { TokenValidation } from '../middleware/validate.token';

const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/profile', TokenValidation ,profile);

export default router