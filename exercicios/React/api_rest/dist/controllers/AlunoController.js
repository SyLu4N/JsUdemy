"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

function AlunoController() {

}

AlunoController.prototype.index = async (req, res) => {
  const alunos = await _Aluno2.default.findAll({
    attributes: ['id', 'nome', 'sobrenome', 'email'],
    // Oque vai ser mostrado em fotos
    order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']], // ASC > Crescente DESC > Decrescente
    // Orden da lista
    include: {
      // Adicionando a foto
      model: _Foto2.default,
      // Caminho
      attributes: ['originalname', 'filename', 'url'],
      // Oque vai ser mostrado em fotos
    },
  });
  return res.json(alunos);
};

AlunoController.prototype.store = async function (req, res) {
  try {
    const aluno = await _Aluno2.default.create(req.body);
    return res.json(`Aluno(a) "${aluno.nome}" criado com sucesso!`);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map(err => err.message),
    });
  }
};

AlunoController.prototype.show = async function (req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        errors: ['Faltando ID'],
      });
    }

    const aluno = await _Aluno2.default.findByPk(id, {
      attributes: ['id', 'nome', 'sobrenome', 'email'],
      order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']], // ASC > Crescente DESC > Decrescente
      include: {
        model: _Foto2.default,
        attributes: ['url', 'originalname', 'filename'],
      },
    });

    if (!aluno) {
      return res.status(400).json({
        errors: ['Aluno não existe!'],
      });
    }

    return res.json(aluno);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map(err => err.message),
    });
  }
};

AlunoController.prototype.delete = async function (req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        errors: ['Faltando ID'],
      });
    }

    const aluno = await _Aluno2.default.findByPk(id);

    if (!aluno) {
      return res.status(400).json({
        errors: ['Aluno não existe!'],
      });
    }
    await aluno.destroy();
    return res.json(`Aluno(a) "${aluno.nome}" apagado(a) com sucesso!`);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map(err => err.message),
    });
  }
};

AlunoController.prototype.update = async function (req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        errors: ['Faltando ID'],
      });
    }

    const aluno = await _Aluno2.default.findByPk(id);

    if (!aluno) {
      return res.status(400).json({
        errors: ['Aluno não existe!'],
      });
    }

    const alunoAtt = await aluno.update(req.body);

    return res.json(alunoAtt);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map(err => err.message),
    });
  }
};

exports. default = new AlunoController();
