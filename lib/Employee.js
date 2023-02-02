const inquirer = require('inquirer')

class Employee {
    constructor(name="MISSINGNAME", id="MISSINGID", email="MISSINGEMAIL"){
        this.name = name
        this.id = id
        this.email = email
    }
    
    getName(){
            return inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'What is your name?',
                        name: 'name',
                    },
                ])
                .then((response) => {
                    this.name = response.name
                    return response.name
                })
                .catch((err) => {console.error()})
    }

    getId(){
            return inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'What is your ID?',
                        name: 'id',
                    },
                ])
                .then((response) => {
                    this.id = response.id
                    return response.id
                })
                .catch((err) => {console.error()})
    }

    getEmail(){
            return inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'What is your email?',
                        name: 'email',
                    },
                ])
                .then((response) => {
                    this.email = response.email
                    return response.email
                })
                .catch((err) => {console.error()})
    }

    getRole(){
        return 'Employee'
    }
}

module.exports = Employee