"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("books", {
      book_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      book_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      book_description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number_of_pages: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      published_at: {
        type: Sequelize.DATE,
        allowNull: false,
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

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("books");
  },
};
