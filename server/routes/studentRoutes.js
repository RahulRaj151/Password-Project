import { Router } from 'express';
import { registerStudent, studentAggregation } from '../controllers/studentController.js';

const router = Router();
router.post('/register', registerStudent);
router.get('/aggregation', studentAggregation);

export default router;
