const { Student } = require("../../database/models/student");
class CreateStudentService {
  static async execute(student) {
    const studentExists = await Student.findOne({
      where: {
        email: student.email,
      },
    });

    if (studentExists) {
      throw new Error("Student already exists");
    }

    const createdStudent = await Student.create(student);

    return createdStudent;
  }
}

module.exports = { CreateStudentService };
