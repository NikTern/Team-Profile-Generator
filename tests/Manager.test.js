const Employee = require("../lib/Manager")
const manager = new Manager()

describe('getOfficeNumber', () =>{
    it("should prompt the user for an office number", () => {
        expect(manager.getGithub("dog").toBe("dog"))
    })
})


describe('getRole', () =>{
    it("should return the role Manager", () => {
        expect(manager.getrole().toBe("Manager"))
    })
})