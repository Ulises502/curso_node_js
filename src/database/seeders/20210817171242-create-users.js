'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {         
          firstName: "Fran",
          lastName: "Lanciotti",
          phone: "2245561561",
          email: "john@doe.com",
          username:"franlanciotti",
          password: bcrypt.hashSync('1234', 8),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "curso",
          lastName: "node",
          phone: "157756156",
          email: "joh2n@doe.com",
          username:"cursonode",
          password: bcrypt.hashSync('1234', 8),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
