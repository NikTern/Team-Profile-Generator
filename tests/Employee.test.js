const Employee = require("../lib/Employee")
const employee = new Employee()

describe('getName', () =>{
    it("should prompt the user for a name", () => {
        expect(employee.getName("dog").toBe("dog"))
    })
})

describe('getId', () =>{
    it("should prompt the user for an ID", () => {
        expect(employee.getId("dog").toBe("dog"))
    })
})

describe('getEmail', () =>{
    it("should prompt the user for an Email", () => {
        expect(employee.getEmail("dog").toBe("dog"))
    })
})

describe('getRole', () =>{
    it("should return the role", () => {
        expect(employee.getrole().toBe(employee.role))
    })
})