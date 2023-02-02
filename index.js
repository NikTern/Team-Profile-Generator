//import relevant files
const fs = require("fs")
const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const selectEmployee = require('./lib/SelectEmployee')

//make code to delete what's on the index file so it resets each time index.js is run

 
//INTRO
console.log("Please Build Your Team")

//ARRAY OF EMPLOYEES
//MANAGER - only ONE manager, and manager prompts get asked first without option to select
const manager = new Manager()

manager.getName()
  .then(() => {
    return manager.getId()
  })
  .then(() => {
    return manager.getEmail()
  })
  .then(() =>{
    return manager.getOfficeNumber()
  })
  .then(() => {
    return selectEmployee()
  })
  .then((result)=>{
    const employees = [manager, ...result]
    console.log(employees)
  })






    // .then((response) => {
    //     const {username, location} = response
        
    //     const html = `<!DOCTYPE html>
    //     <html lang="en">
    //     <head>
    //       <meta charset="UTF-8">
    //       <meta http-equiv="X-UA-Compatible" content="ie=edge">
    //       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    //       <title>Document</title>
    //     </head>
    //     <body>
    //       <div class="jumbotron jumbotron-fluid">
    //       <div class="container">
    //         <h1 class="display-4">Hi! My name is ${username}</h1>
    //         <p class="lead">I am from ${location}.</p>
    //         <p class="lead">Bio: ${username}.</p>
    //         <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    //         <ul class="list-group">
    //           <li class="list-group-item">My GitHub username is ${location}</li>
    //           <li class="list-group-item">LinkedIn: ${username}</li>
    //         </ul>
    //       </div>
    //     </div>
    //     </body>
    //     </html>`
        
    //     fs.writeFile(`${username}.html`, html, (err) =>
    //     err ? console.log(err) : console.log("success!"))

    // })
    // .catch((err) => {console.error()})
