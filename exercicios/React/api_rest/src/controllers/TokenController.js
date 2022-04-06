import jwt from 'jsonwebtoken';
import User from '../models/User';

function TokenController() {

}

TokenController.prototype.store = async (req, res) => {
  const { log = '', password = '' } = req.body;

  if (!password || !log) {
    return res.status(401).json({
      errors: ['Credênciais inválidas.'],
    });
  }

  let user = '';
  let email = '';
  let usuario = '';

  if (log.indexOf('@') !== -1) {
    email = log;
    user = await User.findOne({ where: { email } });
  } else {
    usuario = log;
    user = await User.findOne({ where: { usuario } });
  }

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

  const token = jwt.sign({ id, log }, process.env.TOKEN_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRATION,
  });

  return res.json({
    token,
    user: {
      nome: user.nome, id, email: user.email, usuario: user.usuario,
    },
  });
};

export default new TokenController();
