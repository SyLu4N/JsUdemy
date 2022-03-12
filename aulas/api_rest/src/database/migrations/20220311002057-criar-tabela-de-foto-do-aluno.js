module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fotos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true, // Permite ser nullo
        references: {
          model: 'alunos',
          key: 'id',
        },
        onDelete: 'SET NULL', // As fotos são pagadas junto com o id do aluno / SET NULL = Permance com as fotos mesmo sem o id do aluno
        onUpdate: 'CASCADE', // Caso mude o id do aluno, muda junto.
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('fotos');
  },
};
