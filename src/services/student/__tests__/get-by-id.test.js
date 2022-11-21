const { GetByIdStudentsService } = require("../get-by-id");
const { Student } = require("../../../database/models/student");

jest.mock("../../../database/models/book", () => ({
  Book: {},
}));

jest.mock("../../../database/models/student", () => ({
  Student: {
    findByPk: jest.fn(),
  },
}));

const student = {
  name: "Student name",
  last_name: "Student lastname",
  email: "email@email.com",
  date_of_birth: "2020-01-01",
};

const mockFindByPk = jest.fn().mockResolvedValue(student);

Student.findByPk.mockImplementation(mockFindByPk);

describe("GetByID students service", () => {
  it("should findByPk a student", async () => {
    const sut = await GetByIdStudentsService.execute(1);

    expect(mockFindByPk).toHaveBeenCalled();
    expect(sut).toEqual(student);
  });
});
