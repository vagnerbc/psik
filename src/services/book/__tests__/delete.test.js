const { DeleteBookService } = require("../delete");
const { Book } = require("../../../database/models/book");

jest.mock("../../../database/models/book", () => ({
  Book: {
    findByPk: jest.fn(),
    destroy: jest.fn(),
  },
}));

describe("Delete book service", () => {
  it("should delete a book", async () => {
    const mockBook = {
      destroy: jest.fn(),
    };

    const mockFindByPk = jest.fn().mockResolvedValue(mockBook);

    Book.findByPk.mockImplementation(mockFindByPk);

    await DeleteBookService.execute(1);

    expect(mockFindByPk).toHaveBeenCalled();
    expect(mockBook.destroy).toHaveBeenCalled();
  });

  it("should throw an error if book does not exist", async () => {
    const mockFindByPk = jest.fn().mockResolvedValue(null);

    Book.findByPk.mockImplementation(mockFindByPk);

    const suv = DeleteBookService.execute(1);

    await expect(suv).rejects.toThrow("Book not found");
  });
});
