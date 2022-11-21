const { Model, DataTypes } = require("sequelize");
const sequelize = require("../");

class Book extends Model {}

Book.init(
  {
    book_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    book_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    book_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number_of_pages: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    published_at: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
  },
  {
    sequelize,
    modelName: "Book",
  }
);

module.exports = { Book };
