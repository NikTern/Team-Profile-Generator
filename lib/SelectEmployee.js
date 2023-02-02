const inquirer = require('inquirer')
const Employee = require('./Employee')
const Engineer = require('./Engineer')
const Intern = require('./Intern')

employeeList = []
async function selectEmployee() {  
  const response = await inquirer.prompt([
    {
      type: 'list',
      message: 'Which type of team member would you like to add?',
      name: 'selectEmployee',
      choices: [
        'Engineer',
        'Intern',
        "I don't want to add anymore members"
      ]
    }
  ]);

  if (response.selectEmployee === 'Engineer') {
    let newEngineer = new Engineer()

    await newEngineer.getName()
    .then(() => {
      return newEngineer.getId()
    })
    .then(() => {
      return newEngineer.getEmail()
    })
    .then(() =>{
      return newEngineer.getGithub()
    })
    .then(()=>{
      employeeList.push(newEngineer)
    })
    return selectEmployee()
  }

  if (response.selectEmployee === 'Intern') {
    let newIntern = new Intern()

    await newIntern.getName()
    .then(() => {
      return newIntern.getId()
    })
    .then(() => {
      return newIntern.getEmail()
    })
    .then(() =>{
      return newIntern.getSchool()
    })
    .then(()=>{
      employeeList.push(newIntern)
    })
    return selectEmployee()
  }

  if (response.selectEmployee === "I don't want to add anymore members") {
      console.log('exit!!!')
      return employeeList
  }
}

module.exports = selectEmployee