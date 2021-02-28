const Intern = require("./construct-function/intern");

test("Set GitHub account using constructor argument", () => {
    const validTest = "Jedi Academy";
    const intern = new Engineer("Din", 1, "test@test.com", validTest);
    expect(intern.github).toBe(validTest);
});

test("getRole() should return \"engineer\"", () => {
    const validTest = "Intern";
    const intern = new Intern("Din", 1, "test@test.com", "Jedi Academy");
    expect(intern.getRole()).toBe(validTest);
});

test("Get GitHub user name using getGitHub()", () => {
    const validTest = "Jedi Academy";
    const intern = new Intern("Din", 1, "test@test.com", validTest);
    expect(intern.getSchool()).toBe(validTest);
});