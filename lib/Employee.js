const inquirer = require('inquirer')

class Employee {
    constructor(Name="", ID="", Email=""){
        this.Name = Name
        this.ID = ID
        this.Email = Email
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
                        name: 'ID',
                    },
                ])
                .then((response) => {
                    this.ID = response.ID
                    return response.ID
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
                    this.Email = response.email
                    return response.email
                })
                .catch((err) => {console.error()})
    }

    getRole(){
        return 'Employee'
    }
}

module.exports = Employee