"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _FotoController = require('../controllers/FotoController'); var _FotoController2 = _interopRequireDefault(_FotoController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/', _loginRequired2.default, _FotoController2.default.index);
router.get('/:id', _loginRequired2.default, _FotoController2.default.show);
router.post('/', _loginRequired2.default, _FotoController2.default.store);
router.put('/', _loginRequired2.default, _FotoController2.default.update);
router.delete('/:id', _loginRequired2.default, _FotoController2.default.delete);

exports. default = router;
