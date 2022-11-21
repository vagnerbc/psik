const { GetAllBooksService } = require("../../../services/book/get-all");
const { GetByIdBooksService } = require("../../../services/book/get-by-id");
const { CreateBookService } = require("../../../services/book/create");
const { DeleteBookService } = require("../../../services/book/delete");
const {
  RelateStudentToBookService,
} = require("../../../services/book/relate-student");

const bookResolver = {
  Query: {
    books: () => {
      return GetAllBooksService.execute();
    },
    book: (_, { id }) => {
      return GetByIdBooksService.execute(id);
    },
  },

  Mutation: {
    createBook: (_, { input }) => {
      return CreateBookService.execute(input);
    },
    deleteBook: (_, { id }) => {
      return DeleteBookService.execute(id);
    },
    relateStudentToBook: (_, { student_id, book_id }) => {
      return RelateStudentToBookService.execute(student_id, book_id);
    },
  },
};

module.exports = bookResolver;
