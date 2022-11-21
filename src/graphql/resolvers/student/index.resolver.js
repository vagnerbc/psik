const { GetAllStudentsService } = require("../../../services/student/get-all");
const {
  GetByIdStudentsService,
} = require("../../../services/student/get-by-id");
const { CreateStudentService } = require("../../../services/student/create");
const { DeleteStudentService } = require("../../../services/student/delete");

const studentResolver = {
  Query: {
    students: () => {
      return GetAllStudentsService.execute();
    },
    student: (_, { id }) => {
      return GetByIdStudentsService.execute(id);
    },
  },

  Mutation: {
    createStudent: (_, { input }) => {
      return CreateStudentService.execute(input);
    },
    deleteStudent: (_, { id }) => {
      return DeleteStudentService.execute(id);
    },
  },
};

module.exports = studentResolver;
