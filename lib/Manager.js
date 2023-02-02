const Employee = require('./Employee');
const inquirer = require('inquirer')

class Manager extends Employee{
    constructor(name="MISSINGNAME", id="MISSINGID", email="MISSINGEMAIL", officeNumber="MISSINGOFFICENUMBER"){
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getOfficeNumber(){
            return inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your Office Number?',
                    name: 'officenumber',
                },
            ])
            .then((response) => {
                this.officeNumber = response.officenumber
                return response.officenumber
            })
            .catch((err) => {console.error()})
    }

    getRole(){
        return "Manager"
    }
}

// const manager = new Manager()
// manager.getName()
// manager.getId()
// manager.getRole()
// manager.getOfficeNumber()

module.exports = Manager