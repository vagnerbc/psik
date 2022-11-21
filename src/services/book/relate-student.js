const { Book } = require("../../database/models/book");
const { Student } = require("../../database/models/student");

const MAX_STUDENTS_PER_BOOK = 3;

class RelateStudentToBookService {
  static async execute(student_id, book_id) {
    const student = await Student.findByPk(student_id);

    if (!student) {
      throw new Error("Student not found");
    }

    const booksOfStudent = await student.getBooks();

    if (booksOfStudent.some((book) => book.book_id === book_id)) {
      throw new Error("Student already has this book");
    }

    const book = await Book.findByPk(book_id);

    if (!book) {
      throw new Error("Book not found");
    }

    const studentsOfBook = await book.getStudents();

    if (studentsOfBook.length >= MAX_STUDENTS_PER_BOOK) {
      throw new Error("Book already has the maximum number of students");
    }

    await student.addBook(book);

    return book;
  }
}

module.exports = { RelateStudentToBookService };
