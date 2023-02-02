const Employee = require('./Employee');
const inquirer = require('inquirer')

class Intern extends Employee{
    constructor(Name="", ID="", Email="", School=""){
        super(Name, ID, Email)
        this.School = School
        this.role = this.getRole()
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
                this.School = response.school
                return response.school
            })
            .catch((err) => {console.error()})
    }

    getRole(){
        return "Intern"
    }
}

module.exports = Intern