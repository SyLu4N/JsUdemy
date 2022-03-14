import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 150],
            msg: 'Nome precisa ter entre 3 e 150 caracteres.',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 150],
            msg: 'Sobrenome precisa ter entre 3 e 150 caracteres.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já cadastrado',
        },
        isEmail: {
          msg: 'E-mail inválido!',
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        isInt: {
          msg: 'Idade inválida!',
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        isFloat: {
          msg: 'Peso inválido',
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        isFloat: {
          msg: 'Peso inválido',
        },
      },

    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' }); // associando o aluno a foto
  // hasMany > Varias fotos / hasOne > uma foto
  }
}
