import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir.
// router.get('/', userController.index); // Lista Usuários
// router.get('/:id', userController.show); // Lista Usuário

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index --> lista todos os usuários --> get
store/create --> cria um novo usuário --> post
delete --> apaga um usuário --> delete
show --> mostra um usuário --> get
update --> atualiza um usuário --> patch ou put
*/
