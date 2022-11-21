const { CreateBookService } = require("../create");
const { Book } = require("../../../database/models/book");

jest.mock("../../../database/models/book", () => ({
  Book: {
    create: jest.fn(),
  },
}));

const book = {
  book_name: "Book name",
  book_description: "Book description",
  number_of_pages: 100,
  published_at: "2020-01-01",
};

const mockCreate = jest.fn().mockResolvedValue(book);

Book.create.mockImplementation(mockCreate);

describe("Create book service", () => {
  it("should create a book", async () => {
    const sut = await CreateBookService.execute({});

    expect(mockCreate).toHaveBeenCalled();
    expect(sut).toEqual(book);
  });
});
