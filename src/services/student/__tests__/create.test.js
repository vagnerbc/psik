const { CreateStudentService } = require("../create");
const { Student } = require("../../../database/models/student");

jest.mock("../../../database/models/student", () => ({
  Student: {
    findOne: jest.fn(),
    create: jest.fn(),
  },
}));

const student = {
  name: "Student name",
  last_name: "Student lastname",
  email: "email@email.com",
  date_of_birth: "2020-01-01",
};

describe("Create student service", () => {
  const mockCreate = jest.fn().mockResolvedValue(student);

  Student.create.mockImplementation(mockCreate);

  it("should create a student", async () => {
    const mockFindOne = jest.fn().mockResolvedValue(null);
    Student.findOne.mockImplementation(mockFindOne);

    const sut = await CreateStudentService.execute({});

    expect(mockCreate).toHaveBeenCalled();
    expect(sut).toEqual(student);
  });

  it("should throw an error if student already exists", async () => {
    const mockFindOne = jest.fn().mockResolvedValue(student);
    Student.findOne.mockImplementation(mockFindOne);

    const sut = CreateStudentService.execute({});

    await expect(sut).rejects.toThrow("Student already exists");
  });
});
