const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name="MISSINGNAME", id="MISSINGID", email="MISSINGEMAIL", github="MISSINGGITHUB"){
        super(name, id, email)
        this.github = github
    }

    getGithub(){
        return this.github
    }

    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer