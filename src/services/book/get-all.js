const { Book } = require("../../database/models/book");

class GetAllBooksService {
  static async execute() {
    return await Book.findAll();
  }
}

module.exports = { GetAllBooksService };
