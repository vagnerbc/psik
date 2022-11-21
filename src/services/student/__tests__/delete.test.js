const { DeleteStudentService } = require("../delete");
const { Student } = require("../../../database/models/student");

jest.mock("../../../database/models/student", () => ({
  Student: {
    findByPk: jest.fn(),
    destroy: jest.fn(),
  },
}));

describe("Delete student service", () => {
  it("should delete a student", async () => {
    const mockStudent = {
      destroy: jest.fn(),
    };

    const mockFindByPk = jest.fn().mockResolvedValue(mockStudent);

    Student.findByPk.mockImplementation(mockFindByPk);

    await DeleteStudentService.execute(1);

    expect(mockFindByPk).toHaveBeenCalled();
    expect(mockStudent.destroy).toHaveBeenCalled();
  });

  it("should throw an error if student does not exist", async () => {
    const mockFindByPk = jest.fn().mockResolvedValue(null);

    Student.findByPk.mockImplementation(mockFindByPk);

    const suv = DeleteStudentService.execute(1);

    expect(mockFindByPk).toHaveBeenCalled();
    await expect(suv).rejects.toThrow("Student not found");
  });
});
