const Employee = require('./Employee');
const inquirer = require('inquirer')

class Engineer extends Employee{
    constructor(name="MISSINGNAME", id="MISSINGID", email="MISSINGEMAIL", github="MISSINGGITHUB"){
        super(name, id, email)
        this.github = github
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
                this.github = response.github
                return response.github
            })
            .catch((err) => {console.error()})
    }

    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer