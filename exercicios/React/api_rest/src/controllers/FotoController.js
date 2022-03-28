import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Foto from '../models/Foto';
import Aprendiz from '../models/Aprendiz';
import User from '../models/User';

const upload = multer(multerConfig).single('foto');

function FotoController() {

}

FotoController.prototype.index = async function (req, res) {
  try {
    const user = await User.findByPk(req.userId);
    console.log(user.id);

    if (!user.id) {
      return res.status(401);
    }

    const alunos = await Aprendiz.findAll({
      attributes: ['user_id', 'id'],
      include: {
        model: Foto,
        attributes: ['originalname', 'filename', 'url', 'id'],
      },
    });

    console.log(alunos);

    const novosAlunos = alunos.filter((aluno) => aluno.user_id === user.id);
    return res.json(novosAlunos);
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errors: ['Algo inesperado aconteceu!'],
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

    const foto = await Foto.findByPk(id);

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

      const aluno = await Aprendiz.findByPk(aluno_id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      const foto = await Foto.create({ originalname, filename, aluno_id }); // cria a tabela do banco de dados

      return res.json(foto);
    } catch (e) {
      console.log(e);
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
      const { id: user_id } = await User.findByPk(req.userId);

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

      const foto = await Foto.findByPk(id);
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
    const user = await User.findByPk(req.userId);

    if (!user.id) {
      return res.status(401);
    }

    const { id } = req.params;

    if (!id || id === '' || id === undefined) {
      return res.status(400).json({
        errors: ['ID da foto precisa ser mandando'],
      });
    }

    const foto = await Foto.findByPk(id);

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

export default new FotoController();
