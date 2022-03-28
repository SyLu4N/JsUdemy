import Aprendiz from '../models/Aprendiz';
import User from '../models/User';
import Foto from '../models/Foto';

function AprendizController() {

}

AprendizController.prototype.index = async function (req, res) {
  try {
    const user = await User.findByPk(req.userId);

    if (!user.id) {
      return res.status(401);
    }

    const user_id = user.id;
    console.log(user_id);

    const alunos = await Aprendiz.findAll({
      attributes: ['user_id', 'id', 'nome', 'sobrenome', 'email'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']], // ASC > Crescente DESC > Decrescente
      include: {
        model: Foto,
        attributes: ['originalname', 'filename', 'url'],
      },
    });

    const novosAlunos = alunos.filter((aluno) => aluno.user_id === user_id);
    return res.json(novosAlunos);
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errors: e.errors.map(err => err.message),
    });
  }
};

AprendizController.prototype.show = async function (req, res) {
  try {
    const { id: user_id } = await User.findByPk(req.userId);

    if (!user_id) {
      return res.status(401).json({
        errors: ['É necessário estar logado!'],
      });
    }

    const { id } = req.params;

    const aprendiz = await Aprendiz.findByPk(id, {
      attributes: ['id', 'nome', 'sobrenome', 'email'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']], // ASC > Crescente DESC > Decrescente
      include: {
        model: Foto,
        attributes: ['originalname', 'filename', 'url'],
      },
    });

    if (!aprendiz) {
      return res.status(400).json({
        errors: ['Aprendiz não encontrado!'],
      });
    }

    const aprendiz2 = await Aprendiz.findByPk(id);
    if (aprendiz2.user_id !== user_id) {
      return res.status(400).json({
        errors: ['Aprendiz não encontrado!'],
      });
    }

    return res.json(aprendiz);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map(err => err.message),
    });
  }
};

AprendizController.prototype.store = async function (req, res) {
  try {
    const { id } = await User.findByPk(req.userId);
    const { nome, sobrenome, email } = req.body;

    if (!id || id === '' || id === undefined) {
      return res.status(401).json({
        errors: ['Você precisa estar logado para isso!'],
      });
    }

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(400).json({
        errors: ['Usuário não existe'],
      });
    }

    const aprendiz = await Aprendiz.create({
      nome, sobrenome, email, user_id: id,
    });

    return res.json(aprendiz);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map(err => err.message),
    });
  }
};

AprendizController.prototype.update = async function (req, res) {
  try {
    const { id: user_id } = await User.findByPk(req.userId);

    if (!user_id) {
      return res.status(400).json({
        errors: ['É necessário estar logado para isso!'],
      });
    }

    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        errors: ['É necessário o ID do aprendiz!'],
      });
    }

    const aprendiz = await Aprendiz.findByPk(id);

    if (!aprendiz) {
      return res.status(400).json({
        errors: ['Aprendiz não encontrado!'],
      });
    }

    const aprendiz2 = await Aprendiz.findByPk(id);
    if (aprendiz2.user_id !== user_id) {
      return res.status(400).json({
        errors: ['Aprendiz não encontrado!'],
      });
    }

    const apredizAtualizado = await aprendiz.update(req.body);

    return res.json(apredizAtualizado);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map(err => err.message),
    });
  }
};

AprendizController.prototype.delete = async function (req, res) {
  try {
    const { id: user_id } = await User.findByPk(req.userId);

    if (!user_id) {
      return res.status(401).json({
        errors: ['É necessário estar logado para isso!'],
      });
    }

    const { id } = await req.params;

    if (!id) {
      return res.status(400).json({
        errors: ['É necessário o ID do aprendiz!'],
      });
    }

    const aprendiz = await Aprendiz.findByPk(id);

    if (!aprendiz) {
      return res.status(400).json({
        errors: ['Aprendiz não encontrado!'],
      });
    }

    const aprendiz2 = await Aprendiz.findByPk(id);
    if (aprendiz2.user_id !== user_id) {
      return res.status(400).json({
        errors: ['Aprendiz não encontrado!'],
      });
    }

    await aprendiz.destroy();

    return res.json(`Aprendiz "${aprendiz.nome}" apagado(a) com sucesso!`);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map(err => err.message),
    });
  }
};

export default new AprendizController();
