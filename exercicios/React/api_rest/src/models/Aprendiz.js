import Sequelize, { Model } from 'sequelize';

export default class Aprendiz extends Model {
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

    }, {
      sequelize,
      tableName: 'aprendizes',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' }); // associando o aluno a foto
  }
}
