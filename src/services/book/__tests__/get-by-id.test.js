const { GetByIdBooksService } = require("../get-by-id");
const { Book } = require("../../../database/models/book");

jest.mock("../../../database/models/student", () => ({
  Student: {},
}));

jest.mock("../../../database/models/book", () => ({
  Book: {
    findByPk: jest.fn(),
  },
}));

const book = {
  book_name: "Book name",
  book_description: "Book description",
  number_of_pages: 100,
  published_at: "2020-01-01",
};

const mockFindByPk = jest.fn().mockResolvedValue(book);

Book.findByPk.mockImplementation(mockFindByPk);

describe("GetByID books service", () => {
  it("should findByPk a book", async () => {
    const sut = await GetByIdBooksService.execute(1);

    expect(mockFindByPk).toHaveBeenCalled();
    expect(sut).toEqual(book);
  });
});
