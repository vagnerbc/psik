const { Book } = require("../../database/models/book");

class DeleteBookService {
  static async execute(id) {
    const book = await Book.findByPk(id);

    if (!book) {
      throw new Error("Book not found");
    }

    await book.destroy();
  }
}

module.exports = { DeleteBookService };
