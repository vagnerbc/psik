const { Book } = require("../../database/models/book");
const { Student } = require("../../database/models/student");

class GetByIdStudentsService {
  static async execute(id) {
    return await Student.findByPk(id, {
      include: [
        {
          model: Book,
          as: "books",
        },
      ],
    });
  }
}

module.exports = { GetByIdStudentsService };
