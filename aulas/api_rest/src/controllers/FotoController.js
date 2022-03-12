import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Foto from '../models/Foto';
import Aluno from '../models/Aluno';

const upload = multer(multerConfig).single('foto');

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

      if (!aluno_id || aluno_id === '' || aluno_id === undefined) {
        return res.status(400).json({
          errors: 'ID do aluno precisa ser mandando',
        });
      }

      const aluno = await Aluno.findByPk(aluno_id);

      if (!aluno) {
        return res.status(400).json({
          errors: 'Aluno não existe',
        });
      }

      const foto = await Foto.create({ originalname, filename, aluno_id }); // cria a tabela do banco de dados

      return res.json(foto);
    } catch (e) {
      return res.status(400).json({
        errors: 'Algo inesperado aconteceu!',
      });
    }
  });
};

export default new FotoController();
