import express from 'express';
import { signup, signin, profile } from '../controllers/auth.controller';
import { TokenValidation } from '../middleware/validate.token';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', TokenValidation ,profile);

export default router