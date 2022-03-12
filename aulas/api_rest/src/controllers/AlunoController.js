import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

function AlunoController() {

}

AlunoController.prototype.index = async (req, res) => {
  const alunos = await Aluno.findAll({
    attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
    // Oque vai ser mostrado em fotos
    order: [['id', 'DESC'], [Foto, 'id', 'DESC']], // ASC > Crescente DESC > Decrescente
    // Orden da lista
    include: {
      // Adicionando a foto
      model: Foto,
      // Caminho
      attributes: ['originalname', 'filename', 'url'],
      // Oque vai ser mostrado em fotos
    },
  });
  res.json(alunos);
};

AlunoController.prototype.store = async function (req, res) {
  try {
    console.log(req.body);
    const aluno = await Aluno.create(req.body);
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

    const aluno = await Aluno.findByPk(id, {
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']], // ASC > Crescente DESC > Decrescente
      include: {
        model: Foto,
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

    const aluno = await Aluno.findByPk(id);

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

    const aluno = await Aluno.findByPk(id);

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

export default new AlunoController();
