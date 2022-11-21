const { Model, DataTypes } = require("sequelize");
const sequelize = require("../");
const { Book } = require("./book");

class Student extends Model {}

Student.init(
  {
    student_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: true,
      },
    },
  },
  {
    sequelize,
    modelName: "Student",
  }
);

Student.belongsToMany(Book, {
  through: "student_books",
  as: "books",
  foreignKey: "student_id",
});

Book.belongsToMany(Student, {
  through: "student_books",
  as: "students",
  foreignKey: "book_id",
});

module.exports = { Student };
