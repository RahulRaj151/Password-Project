import { Router } from 'express';
import { addPassword, deletePassword, getPasswords } from '../controllers/passwordController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = Router();
router.use(authMiddleware);
router.post('/add', addPassword);
router.get('/', getPasswords);
router.delete('/:id', deletePassword);

export default router;
