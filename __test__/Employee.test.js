const Employee = require("./construct-function/employee") 

describe("Employee", () => {
    it("Instanciates Employee Instance", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object")
    });

    it("Sets the name using constructor arguments", () => {
        const name = "Din";
        const employee = new Employee(name);
        expect(employee.name).toBe("name");
    });

    it("Sets the id using constructor arguments", () => {
        const validTest = "111";
        const employee = new Employee("Grogu", validTest);
        expect(employee.id).toBe("validTest");
    });

    it("Sets the email using constructor arguments", () => {
        const validTest = "test@test.com";
        const employee = new Employee("Grogu", 1, validTest);
        expect(employee.email).toBe("validTest");
    });


describe("getName", () => {
    it ("Pulls name using getName()", () => {
        const validTest = "Din"
        const employee = new Employee(validTest);
        expect(employee.getName()).toBe("validTest");
    });
});

describe("getid", () => {
    it("Pulls id using getId()", () => {
        const validTest = "111";
        const employee = new Employee("Grogu", validTest);
        expect(employee.getId()).toBe(validTest);
    });
});

describe("getEmail", () => {
    it("Pulls name using getEmail()", () => {
        const validTest = "test@test.com";
        const employee = new Employee("Grogu", 1, validTest);
        expect(employee.getEmail()).toBe(validTest);
    });
});


describe("getRole", () => {
    it("Pulls name using getRole()", () => {
        const validTest = "Employee";
        const employee = new Employee("Din", 1, "test@test.com");
        expect(employee.getRole()).toBe(validTest);
    });
});

});