const Employee = require('./Employee');
const inquirer = require('inquirer')

class Engineer extends Employee{
    constructor(Name="", ID="", Email="", GitHub=""){
        super(Name, ID, Email)
        this.GitHub = GitHub
        this.role = this.getRole()
    }

    getGithub(){
        return inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your GitHub?',
                    name: 'github',
                },
            ])
            .then((response) => {
                this.GitHub = response.github
                return response.github
            })
            .catch((err) => {console.error()})
    }

    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer