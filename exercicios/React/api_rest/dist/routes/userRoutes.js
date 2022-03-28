"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Não deveria existir.
router.get('/', _UserController2.default.index); // Lista Usuários
router.get('/:id', _UserController2.default.show); // Usuário

router.post('/', _UserController2.default.store);
router.put('/', _loginRequired2.default, _UserController2.default.update);
router.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

/*
index --> lista todos os usuários --> get
store/create --> cria um novo usuário --> post
delete --> apaga um usuário --> delete
show --> mostra um usuário --> get
update --> atualiza um usuário --> patch ou put
*/
