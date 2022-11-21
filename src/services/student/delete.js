const { Student } = require("../../database/models/student");

class DeleteStudentService {
  static async execute(id) {
    const student = await Student.findByPk(id);

    if (!student) {
      throw new Error("Student not found");
    }

    await student.destroy();
  }
}

module.exports = { DeleteStudentService };
