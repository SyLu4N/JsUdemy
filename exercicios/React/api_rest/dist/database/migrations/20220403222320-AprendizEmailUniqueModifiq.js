"use strict";module.exports = {
  async up(queryInterface) {
    await queryInterface.removeConstraint('aprendizes', 'email');
  },

  async down() { /**/ },
};
