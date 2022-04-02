"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

function TokenController() {

}

TokenController.prototype.store = async (req, res) => {
  const { email = '', usuario = '', password = '' } = req.body;

  if (!password || (!usuario && !email)) {
    return res.status(401).json({
      errors: ['Credênciais inválidas.'],
    });
  }

  const user = await _User2.default.findOne({ where: { email } }) || await _User2.default.findOne({ where: { usuario } });

  if (!user) {
    return res.status(401).json({
      errors: ['Usuário inválido.'],
    });
  }

  if (!(await user.passwordIsValid(password))) {
    return res.status(401).json({
      errors: ['Senha inválida'],
    });
  }

  const { id } = user;

  const token = _jsonwebtoken2.default.sign({ id, email, usuario }, process.env.TOKEN_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRATION,
  });

  return res.json({
    token,
    user: {
      nome: user.nome, id, email: user.email, usuario: user.usuario,
    },
  });
};

exports. default = new TokenController();
