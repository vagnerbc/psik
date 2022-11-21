const { GetAllBooksService } = require("../get-all");
const { Book } = require("../../../database/models/book");

jest.mock("../../../database/models/book", () => ({
  Book: {
    findAll: jest.fn(),
  },
}));

const book = {
  book_name: "Book name",
  book_description: "Book description",
  number_of_pages: 100,
  published_at: "2020-01-01",
};

const mockFindAll = jest.fn().mockResolvedValue([book]);

Book.findAll.mockImplementation(mockFindAll);

describe("GetAll books service", () => {
  it("should findAll a book", async () => {
    const sut = await GetAllBooksService.execute({});

    expect(mockFindAll).toHaveBeenCalled();
    expect(sut).toEqual([book]);
  });
});
