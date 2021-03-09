const Intern = require("../construct-function/intern");

test("Set school using constructor argument", () => {
    const validTest = "Jedi Academy";
    const intern = new Intern("Din", 1, "test@test.com", validTest);
    expect(intern.school).toBe(validTest);
});

test("getRole() should return \"intern\"", () => {
    const validTest = "Intern";
    const intern = new Intern("Din", 1, "test@test.com", "Jedi Academy");
    expect(intern.getRole()).toBe(validTest);
});

test("Get school name using getSchool()", () => {
    const validTest = "Jedi Academy";
    const intern = new Intern("Din", 1, "test@test.com", validTest);
    expect(intern.getSchool()).toBe(validTest);
});