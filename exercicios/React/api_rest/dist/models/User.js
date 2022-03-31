"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class User extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo "Nome" deve ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: { // se não for unico
          msg: 'Email já existe', // msg de erro
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      usuario: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: { // se não for unico
          msg: 'Usuário já existe', // msg de erro
        },
        validate: {
          len: {
            args: [6, 16],
            msg: 'Campo "Usuário" deve ter entre 6 e 16 caracteres',
          },
          is: {
            args: /^[a-z, 0-9]+$/i,
            msg: 'Campo "Usuário" só pode conter letras e números',
          },
        },
      },
      password_hash: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      password: {
        type: _sequelize2.default.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha precisa ter entre 6 e 50 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return _bcryptjs2.default.compare(password, this.password_hash);
  }

  static associate(models) {
    this.hasMany(models.Aprendiz, { foreignKey: 'user_id' });
  }
} exports.default = User;
