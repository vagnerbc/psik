const { Book } = require("../../database/models/book");
class CreateBookService {
  static async execute(book) {
    const createBook = await Book.create(book);

    return createBook;
  }
}

module.exports = { CreateBookService };
