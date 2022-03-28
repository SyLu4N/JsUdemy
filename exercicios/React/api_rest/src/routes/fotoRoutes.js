import { Router } from 'express';
import fotoController from '../controllers/FotoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, fotoController.index);
router.get('/:id', loginRequired, fotoController.show);
router.post('/', loginRequired, fotoController.store);
router.put('/', loginRequired, fotoController.update);
router.delete('/:id', loginRequired, fotoController.delete);

export default router;
