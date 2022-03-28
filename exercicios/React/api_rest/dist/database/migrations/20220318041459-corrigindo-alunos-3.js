"use strict";module.exports = {
  async up() { /**/ },

  async down(queryInterface) {
    await queryInterface.removeColumn('alunos', 'idade');
  },
};
