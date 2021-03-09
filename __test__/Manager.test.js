const Manager = require("../construct-function/manager");

test("Set office number using constructor argument", () => {
  const validTest = 111;
  const manager = new Manager("Din", 1, "test@test.com", validTest);
  expect(manager.officeNumber).toBe(validTest);
});

test("getRole() should return \"Manager\"", () => {
  const validTest = "Manager";
  const manager = new Manager("Din", 1, "test@test.com", 111);
  expect(manager.getRole()).toBe(validTest);
});

test("Get office number using getNumber()", () => {
  const validTest = 100;
  const manager = new Manager("Din", 1, "test@test.com", validTest);
  expect(manager.getNumber()).toBe(validTest);
});