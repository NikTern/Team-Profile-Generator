const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name="MISSINGNAME", id="MISSINGID", email="MISSINGEMAIL", school="MISSINGSCHOOL"){
        super(name, id, email)
        this.school = school
    }

    getSchool(){
        return this.school
    }

    getRole(){
        return "Intern"
    }
}

module.exports = Intern