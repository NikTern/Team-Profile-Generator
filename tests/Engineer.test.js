const Employee = require("../lib/Engineer")
const engineer = new Engineer()

describe('getGithub', () =>{
    it("should prompt the user for a Github name", () => {
        expect(engineer.getGithub("dog").toBe("dog"))
    })
})


describe('getRole', () =>{
    it("should return the role Engineer", () => {
        expect(engineer.getrole().toBe("Engineer"))
    })
})