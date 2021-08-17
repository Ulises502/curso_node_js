'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Tasks",
      [
        {         
          name: "Tarea 1",
          fechaCreacion: new Date(),
          fechaVencimiento: new Date(),
          descripcion: "Es una tarea de ejemplo",
          completada: false,
          UserId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tarea 2",
          fechaCreacion: new Date(),
          fechaVencimiento: new Date(),
          descripcion: "Es otra tarea",
          completada: true,
          UserId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tarea 3",
          fechaCreacion: new Date(),
          fechaVencimiento: new Date(),
          descripcion: "Es otra tarea mas",
          completada: false,
          UserId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tarea 4",
          fechaCreacion: new Date(),
          fechaVencimiento: new Date(),
          descripcion: "Es la ultima tarea",
          completada: false,
          UserId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
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
