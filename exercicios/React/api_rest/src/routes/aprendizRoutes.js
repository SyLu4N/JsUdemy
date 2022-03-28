import { Router } from 'express';
import aprendizController from '../controllers/AprendizController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, aprendizController.index);
router.get('/:id', loginRequired, aprendizController.show);

router.post('/', loginRequired, aprendizController.store);
router.put('/:id', loginRequired, aprendizController.update);
router.delete('/:id', loginRequired, aprendizController.delete);

export default router;
