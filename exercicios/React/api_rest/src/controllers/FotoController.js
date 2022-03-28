import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Foto from '../models/Foto';
import Aprendiz from '../models/Aprendiz';
import User from '../models/User';

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

      const aluno = await Aprendiz.findByPk(aluno_id);

      if (!aluno) {
        return res.status(400).json({
          errors: 'Aluno não existe',
        });
      }

      const foto = await Foto.create({ originalname, filename, aluno_id }); // cria a tabela do banco de dados

      return res.json(foto);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: 'Algo inesperado aconteceu!',
      });
    }
  });
};

FotoController.prototype.delete = async function (req, res) {
  try {
    const user = await User.findByPk(req.userId);

    if (!user.id) {
      return res.status(401);
    }

    const { foto_id } = req.body; // recebe o id da foto

    if (!foto_id || foto_id === '' || foto_id === undefined) {
      return res.status(400).json({
        errors: 'ID da foto precisa ser mandando',
      });
    }

    const foto = await Aprendiz.findByPk(foto_id);

    if (!foto) {
      return res.status(400).json({
        errors: 'Foto não existe',
      });
    }

    await foto.destroy();

    return res.json(foto);
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errors: 'Algo inesperado aconteceu!',
    });
  }
};

export default new FotoController();
