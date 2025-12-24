const bcrypt = require('bcryptjs');

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return await queryInterface.bulkInsert('users', [
      {
        nome: 'John Doe',
        email: 'john@mail.com',
        password_hash: await bcrypt.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'John Doe 2',
        email: 'john2@mail.com',
        password_hash: await bcrypt.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'John Doe 3',
        email: 'john3@mail.com',
        password_hash: await bcrypt.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  async down() {
  }
};
