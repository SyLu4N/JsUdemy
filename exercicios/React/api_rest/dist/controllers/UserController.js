"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Aprendiz = require('../models/Aprendiz'); var _Aprendiz2 = _interopRequireDefault(_Aprendiz);

class UserController {
  async store(req, res) {
    try {
      const novoUser = await _User2.default.create(req.body);
      return res.json({ novoUser });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await _User2.default.findAll({
        attributes: ['id', 'nome', 'email', 'usuario'],
        order: [['id', 'DESC'], [_Aprendiz2.default, 'id', 'DESC']], // ASC > Crescente DESC > Decrescente
        include: {
          // Adicionando o aprendiz
          model: _Aprendiz2.default,
          // Caminho ^
          attributes: ['id', 'nome', 'sobrenome', 'email'],
          // Oque vai ser mostrado em aprendiz
        },
      });
      return res.json(users);
    } catch (e) {
      console.log('ferro', e);
      return res.status(404).json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id);

      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      res.status(404);
      return res.status(404).json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      const att = await user.update(req.body);
      const { id, nome, email } = att;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      await user.destroy(); // Deletar "Destroir"

      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }
}

exports. default = new UserController();
