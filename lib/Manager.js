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