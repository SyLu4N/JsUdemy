import User from '../models/User';
import Aprendiz from '../models/Aprendiz';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json({ novoUser });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({
        attributes: ['id', 'nome', 'email'],
        order: [['id', 'DESC'], [Aprendiz, 'id', 'DESC']], // ASC > Crescente DESC > Decrescente
        include: {
          // Adicionando o aprendiz
          model: Aprendiz,
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
      const user = await User.findByPk(req.params.id);

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
      const user = await User.findByPk(req.userId);

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
      const user = await User.findByPk(req.userId);

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

export default new UserController();
