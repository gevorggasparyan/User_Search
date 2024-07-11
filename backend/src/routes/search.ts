import { Router } from 'express';
import { validateSearch } from '../validators/user-validators';
import { search } from '../controllers/user-controller';

const router = Router();

router.post('/search', validateSearch, search);

export default router;
