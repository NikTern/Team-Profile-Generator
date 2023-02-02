const Employee = require('./Employee');
const inquirer = require('inquirer')

class Manager extends Employee{
    constructor(Name="", ID="", Email="", OfficeNumber=""){
        super(Name, ID, Email)
        this.OfficeNumber = OfficeNumber
        this.role = this.getRole()
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
                this.OfficeNumber = response.officenumber
                return response.officenumber
            })
            .catch((err) => {console.error()})
    }

    getRole(){
        return "Manager"
    }
}

module.exports = Manager