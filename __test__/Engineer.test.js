const Engineer = require("./construct-function/engineer");

test("Set GitHub account using constructor argument", () => {
  const validTest = GitHubAcct;
  const engineer = new Engineer("Din", 1, "test@test.com", validTest);
  expect(engineer.github).toBe(validTest);
});

test("getRole() should return \"engineer\"", () => {
  const validTest = "Engineer";
  const engineer = new Engineer("Din", 1, "test@test.com", 111);
  expect(engineer.getRole()).toBe(validTest);
});

test("Get GitHub user name using getGitHub()", () => {
  const validTest = GitHubAcct;
  const engineer = new Engineer("Din", 1, "test@test.com", validTest);
  expect(engineer.getGitHub()).toBe(validTest);
});