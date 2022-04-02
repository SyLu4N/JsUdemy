import jwt from 'jsonwebtoken';
import User from '../models/User';

function TokenController() {

}

TokenController.prototype.store = async (req, res) => {
  const { email = '', usuario = '', password = '' } = req.body;

  if (!password || (!usuario && !email)) {
    return res.status(401).json({
      errors: ['Credênciais inválidas.'],
    });
  }

  const user = await User.findOne({ where: { email } }) || await User.findOne({ where: { usuario } });

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

  const token = jwt.sign({ id, email, usuario }, process.env.TOKEN_SECRET, {
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
