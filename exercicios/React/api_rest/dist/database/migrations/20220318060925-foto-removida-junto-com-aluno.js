"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'fotos',
      'aluno_id',
      {
        type: Sequelize.INTEGER,
        allowNull: true, // Permite ser nullo
        references: {
          model: 'alunos',
          key: 'id',
        },
        onDelete: 'CASCADE', // CASCADE = As fotos são pagadas junto com o id do aluno / SET NULL = Permance com as fotos mesmo sem o id do aluno
        onUpdate: 'CASCADE', // Caso mude o id do aluno, muda junto.
      },
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable('fotos');
  },
};
