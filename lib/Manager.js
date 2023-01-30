// In addition to Employee's properties and methods, Manager will also have the following (// extend Employee.):
// officeNumber
// getRole()—overridden to return 'Manager'

const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name="MISSINGNAME", id="MISSINGID", email="MISSINGEMAIL", officeNumber="MISSINGOFFICENUMBER"){
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getRole(){
        return "Manager"
    }
}

module.exports = Manager