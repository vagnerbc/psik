const { GetAllStudentsService } = require("../get-all");
const { Student } = require("../../../database/models/student");

jest.mock("../../../database/models/student", () => ({
  Student: {
    findAll: jest.fn(),
  },
}));

const student = {
  name: "Student name",
  last_name: "Student lastname",
  email: "email@email.com",
  date_of_birth: "2020-01-01",
};

const mockFindAll = jest.fn().mockResolvedValue([student]);

Student.findAll.mockImplementation(mockFindAll);

describe("GetAll students service", () => {
  it("should findAll a student", async () => {
    const sut = await GetAllStudentsService.execute({});

    expect(mockFindAll).toHaveBeenCalled();
    expect(sut).toEqual([student]);
  });
});
