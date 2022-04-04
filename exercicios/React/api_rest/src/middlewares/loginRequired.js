import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['É necessário estar logado para isso.'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);

    const { id, log } = dados;

    let user = '';
    let email = '';
    let usuario = '';

    if (log.indexOf('@') !== -1) {
      email = log;
      user = await User.findOne({ where: { id, email } });
    } else {
      usuario = log;
      user = await User.findOne({ where: { id, usuario } });
    }

    if (!user) {
      return res.status(401).json({
        errors: ['Algo deu errado, por favor, refaça o login.'],
      });
    }

    req.userId = id;
    req.userEmail = user.email;
    req.userUsuario = user.usuario;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido, tente novamente mais tarde.'],
    });
  }
};
