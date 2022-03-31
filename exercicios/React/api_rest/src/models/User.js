import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo "Nome" deve ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
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
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }

  static associate(models) {
    this.hasMany(models.Aprendiz, { foreignKey: 'user_id' });
  }
}
