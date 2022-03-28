"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aprendiz = require('../models/Aprendiz'); var _Aprendiz2 = _interopRequireDefault(_Aprendiz);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

function AprendizController() {

}

AprendizController.prototype.index = async function (req, res) {
  try {
    const user = await _User2.default.findByPk(req.userId);

    if (!user.id) {
      return res.status(401);
    }

    const user_id = user.id;
    console.log(user_id);

    const alunos = await _Aprendiz2.default.findAll({
      attributes: ['user_id', 'id', 'nome', 'sobrenome', 'email'],
      order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']], // ASC > Crescente DESC > Decrescente
      include: {
        model: _Foto2.default,
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
    const { id: user_id } = await _User2.default.findByPk(req.userId);

    if (!user_id) {
      return res.status(401).json({
        errors: ['É necessário estar logado!'],
      });
    }

    const { id } = req.params;

    const aprendiz = await _Aprendiz2.default.findByPk(id, {
      attributes: ['id', 'nome', 'sobrenome', 'email'],
      order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']], // ASC > Crescente DESC > Decrescente
      include: {
        model: _Foto2.default,
        attributes: ['originalname', 'filename', 'url'],
      },
    });

    if (!aprendiz) {
      return res.status(400).json({
        errors: ['Aprendiz não encontrado!'],
      });
    }

    const aprendiz2 = await _Aprendiz2.default.findByPk(id);
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
    const { id } = await _User2.default.findByPk(req.userId);
    const { nome, sobrenome, email } = req.body;

    if (!id || id === '' || id === undefined) {
      return res.status(401).json({
        errors: ['Você precisa estar logado para isso!'],
      });
    }

    const user = await _User2.default.findByPk(id);

    if (!user) {
      return res.status(400).json({
        errors: ['Usuário não existe'],
      });
    }

    const aprendiz = await _Aprendiz2.default.create({
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
    const { id: user_id } = await _User2.default.findByPk(req.userId);

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

    const aprendiz = await _Aprendiz2.default.findByPk(id);

    if (!aprendiz) {
      return res.status(400).json({
        errors: ['Aprendiz não encontrado!'],
      });
    }

    const aprendiz2 = await _Aprendiz2.default.findByPk(id);
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
    const { id: user_id } = await _User2.default.findByPk(req.userId);

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

    const aprendiz = await _Aprendiz2.default.findByPk(id);

    if (!aprendiz) {
      return res.status(400).json({
        errors: ['Aprendiz não encontrado!'],
      });
    }

    const aprendiz2 = await _Aprendiz2.default.findByPk(id);
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

exports. default = new AprendizController();
