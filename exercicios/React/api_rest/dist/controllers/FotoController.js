"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);
var _Aprendiz = require('../models/Aprendiz'); var _Aprendiz2 = _interopRequireDefault(_Aprendiz);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

const upload = _multer2.default.call(void 0, _multerConfig2.default).single('foto');

function FotoController() {

}

FotoController.prototype.index = async function (req, res) {
  try {
    const user = await _User2.default.findByPk(req.userId);

    if (!user.id) {
      return res.status(401);
    }

    const fotos = await _Foto2.default.findAll();

    const novasFotos = fotos.filter(foto => {
      if (foto.aluno_id === user.id) return foto;
      return 0;
    });

    return res.json(novasFotos);
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errors: 'Algo inesperado aconteceu!',
    });
  }
};

// eslint-disable-next-line consistent-return
FotoController.prototype.show = async function (req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        errors: ['ID não encontrado'],
      });
    }

    const foto = await _Foto2.default.findByPk(id);

    return res.json(foto);
  } catch (e) {
    res.json({
      errors: ['Algo inesperado aconteceu, tente novamente mais tarde!'],
    });
  }
};

FotoController.prototype.store = function (req, res) {
  return upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({
        errors: [err.code],
      });
    }

    try {
      const { originalname, filename } = req.file; // recebe o arquivo "file"
      const { aluno_id } = req.body; // recebe o id do aluno "body"
      if (!aluno_id || aluno_id === '' || aluno_id === undefined) {
        return res.status(400).json({
          errors: ['ID do aluno precisa ser mandando'],
        });
      }

      const aluno = await _Aprendiz2.default.findByPk(aluno_id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      const foto = await _Foto2.default.create({ originalname, filename, aluno_id }); // cria a tabela do banco de dados

      return res.json(foto);
    } catch (e) {
      return res.status(400).json({
        errors: ['Algo inesperado aconteceu!'],
      });
    }
  });
};

FotoController.prototype.update = async function (req, res) {
  return upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({
        errors: [err.code],
      });
    }

    try {
      const { id: user_id } = await _User2.default.findByPk(req.userId);

      if (!user_id) {
        return res.status(400).json({
          errors: ['É necessário estar logado para isso!'],
        });
      }

      const { id } = req.body;
      console.log(req.body);

      if (!id) {
        return res.status(400).json({
          errors: ['É necessário o ID da foto!'],
        });
      }

      const foto = await _Foto2.default.findByPk(id);
      const { originalname, filename } = req.file; // recebe o arquivo "file"

      if (!foto) {
        return res.status(400).json({
          errors: ['Foto não encontrado!'],
        });
      }

      if (foto.aluno_id !== user_id) {
        return res.status(400).json({
          errors: ['Aprendiz não encontrado!'],
        });
      }

      const fotoAtt = await foto.update({ id, originalname, filename });

      return res.json(fotoAtt);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(erro => erro.message),
      });
    }
  });
};

FotoController.prototype.delete = async function (req, res) {
  try {
    const user = await _User2.default.findByPk(req.userId);

    if (!user.id) {
      return res.status(401);
    }

    const { id } = req.params;

    if (!id || id === '' || id === undefined) {
      return res.status(400).json({
        errors: ['ID da foto precisa ser mandando'],
      });
    }

    const foto = await _Foto2.default.findByPk(id);

    if (!foto) {
      return res.status(400).json({
        errors: ['Foto não existe'],
      });
    }

    await foto.destroy();

    return res.json('Foto deleta com sucesso!');
  } catch (e) {
    return res.status(400).json({
      errors: ['Algo inesperado aconteceu!'],
    });
  }
};

exports. default = new FotoController();
