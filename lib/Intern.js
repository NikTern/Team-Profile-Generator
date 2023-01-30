// In addition to Employee's properties and methods, Intern will also have the following (// extend Employee.):
// school
// getSchool()
// getRole()—overridden to return 'Intern'

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