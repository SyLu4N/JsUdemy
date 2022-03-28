"use strict";module.exports = {
  async up() {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface) {
    await queryInterface.deleteColumn('alunos', 'peso');
  },
};
