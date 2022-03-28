"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);
var _Aprendiz = require('../models/Aprendiz'); var _Aprendiz2 = _interopRequireDefault(_Aprendiz);

const upload = _multer2.default.call(void 0, _multerConfig2.default).single('foto');

function FotoController() {

}

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
      console.log('Aqui o ID: >>>', aluno_id);
      if (!aluno_id || aluno_id === '' || aluno_id === undefined) {
        return res.status(400).json({
          errors: 'ID do aluno precisa ser mandando',
        });
      }

      const aluno = await _Aprendiz2.default.findByPk(aluno_id);
      console.log('Aqui o aluno 2!!!!: >>>', aluno);

      if (!aluno) {
        return res.status(400).json({
          errors: 'Aluno não existe',
        });
      }

      const foto = await _Foto2.default.create({ originalname, filename, aluno_id }); // cria a tabela do banco de dados

      return res.json(foto);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: 'Algo inesperado aconteceu!',
      });
    }
  });
};

exports. default = new FotoController();
