const Employee = require("../lib/Intern")
const intern = new Intern()

describe('getSchool', () =>{
    it("should prompt the user for a School name", () => {
        expect(intern.getSchool("dog").toBe("dog"))
    })
})


describe('getRole', () =>{
    it("should return the role Intern", () => {
        expect(intern.getrole().toBe("Intern"))
    })
})