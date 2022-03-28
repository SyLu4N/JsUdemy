"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AprendizController = require('../controllers/AprendizController'); var _AprendizController2 = _interopRequireDefault(_AprendizController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/', _loginRequired2.default, _AprendizController2.default.index);
router.get('/:id', _loginRequired2.default, _AprendizController2.default.show);

router.post('/', _loginRequired2.default, _AprendizController2.default.store);
router.put('/:id', _loginRequired2.default, _AprendizController2.default.update);
router.delete('/:id', _loginRequired2.default, _AprendizController2.default.delete);

exports. default = router;
