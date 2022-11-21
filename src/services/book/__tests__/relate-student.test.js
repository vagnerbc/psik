const { RelateStudentToBookService } = require("../relate-student");
const { Book } = require("../../../database/models/book");
const { Student } = require("../../../database/models/student");

jest.mock("../../../database/models/book", () => ({
  Book: {
    findByPk: jest.fn(),
  },
}));

jest.mock("../../../database/models/student", () => ({
  Student: {
    findByPk: jest.fn(),
  },
}));

const mockBook = {
  getStudents: jest.fn(),
};

const mockStudent = {
  getBooks: jest.fn(),
  addBook: jest.fn(),
};

describe("Create book service", () => {
  it("should relate a student to a book", async () => {
    const mockBookFindByPk = jest.fn().mockResolvedValue(mockBook);
    const mockStudentFindByPk = jest.fn().mockResolvedValue(mockStudent);

    Book.findByPk.mockImplementation(mockBookFindByPk);
    Student.findByPk.mockImplementation(mockStudentFindByPk);

    mockStudent.getBooks.mockResolvedValue([]);
    mockBook.getStudents.mockResolvedValue([]);

    const sut = await RelateStudentToBookService.execute(1, 1);

    expect(mockStudent.addBook).toHaveBeenCalled();
    expect(sut).toEqual(mockBook);
  });

  it("should throw an error if student does not exist", async () => {
    const mockStudentFindByPk = jest.fn().mockResolvedValue(null);

    Student.findByPk.mockImplementation(mockStudentFindByPk);

    const sut = RelateStudentToBookService.execute(1, 1);

    await expect(sut).rejects.toThrow("Student not found");
  });

  it("should throw an error if book does not exist", async () => {
    const mockStudentFindByPk = jest.fn().mockResolvedValue(mockStudent);
    const mockBookFindByPk = jest.fn().mockResolvedValue(null);

    Student.findByPk.mockImplementation(mockStudentFindByPk);
    Book.findByPk.mockImplementation(mockBookFindByPk);

    mockStudent.getBooks.mockResolvedValue([]);

    const sut = RelateStudentToBookService.execute(1, 1);

    await expect(sut).rejects.toThrow("Book not found");
  });

  it("should throw an error if student already has this book", async () => {
    const mockStudentFindByPk = jest.fn().mockResolvedValue(mockStudent);
    const mockBookFindByPk = jest.fn().mockResolvedValue(mockBook);

    Student.findByPk.mockImplementation(mockStudentFindByPk);
    Book.findByPk.mockImplementation(mockBookFindByPk);

    mockStudent.getBooks.mockResolvedValue([{ book_id: 1 }]);
    mockBook.getStudents.mockResolvedValue([]);

    const sut = RelateStudentToBookService.execute(1, 1);

    await expect(sut).rejects.toThrow("Student already has this book");
  });

  it("should throw an error if book already has has the maximum number of students", async () => {
    const mockStudentFindByPk = jest.fn().mockResolvedValue(mockStudent);
    const mockBookFindByPk = jest.fn().mockResolvedValue(mockBook);

    Student.findByPk.mockImplementation(mockStudentFindByPk);
    Book.findByPk.mockImplementation(mockBookFindByPk);

    mockStudent.getBooks.mockResolvedValue([]);
    mockBook.getStudents.mockResolvedValue([
      { student_id: 1 },
      { student_id: 2 },
      { student_id: 3 },
    ]);

    const sut = RelateStudentToBookService.execute(1, 1);

    await expect(sut).rejects.toThrow(
      "Book already has the maximum number of students"
    );
  });
});
