const { Book } = require("../../database/models/book");
const { Student } = require("../../database/models/student");

class GetByIdBooksService {
  static async execute(id) {
    return await Book.findByPk(id, {
      include: [
        {
          model: Student,
          as: "students",
        },
      ],
    });
  }
}

module.exports = { GetByIdBooksService };
