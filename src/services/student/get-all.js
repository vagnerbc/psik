const { Student } = require("../../database/models/student");

class GetAllStudentsService {
  static async execute() {
    return await Student.findAll();
  }
}

module.exports = { GetAllStudentsService };
