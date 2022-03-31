"use strict";module.exports = {
  async up(queryInterface) {
    await queryInterface.removeColumn('users', 'alunos');
  },

  async down() { /**/ },
};
