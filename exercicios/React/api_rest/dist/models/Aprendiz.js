"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aprendiz extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 150],
            msg: 'Nome precisa ter entre 3 e 150 caracteres.',
          },
        },
      },

      sobrenome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },

      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
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
} exports.default = Aprendiz;
