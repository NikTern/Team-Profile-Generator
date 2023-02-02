const Employee = require('./Employee');
const inquirer = require('inquirer')

class Intern extends Employee{
    constructor(name="MISSINGNAME", id="MISSINGID", email="MISSINGEMAIL", school="MISSINGSCHOOL"){
        super(name, id, email)
        this.school = school
    }

    getSchool(){
        return inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your school?',
                    name: 'school',
                },
            ])
            .then((response) => {
                this.school = response.school
                return response.school
            })
            .catch((err) => {console.error()})
    }

    getRole(){
        return "Intern"
    }
}

module.exports = Intern