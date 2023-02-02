//import relevant files
const fs = require("fs")
const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const selectEmployee = require('./lib/SelectEmployee')

//make code to delete what's on the index/html file so it resets each time index.js is run


//INTRO
console.log("Please Build Your Team")

//manager - only ONE manager, and manager prompts get asked first without option to select
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
  //selectEmployee function - recursive function which returns an array of selected Engineer/Intern instances with user-given parameters
  .then(() => {
    return selectEmployee()
  })
  //add manager and selected employees to 'employees' array
  .then((result)=>{
    const employees = [manager, ...result]
    console.log(employees)
    return employees
  })
  .then((employeeList) => {
    let html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <title>Employee Cards</title>
        <style>
          .card-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .card {
            width: 300px;
            margin: 20px;
          }
        </style>
      </head>
      <header class="jumbotron jumbotron-fluid bg-danger text-white text-center">
          <h1>My Team</h1> 
      </header>;
      <body>
        <div class="container">
          <div class="row d-flex justify-content-center">
    `;

    let employeeCards = "";
    employeeList.forEach(employee => {
      let cardBody = `<div class="card-body">`;
      for (const property in employee) {
        if (property !== 'name' && property !== 'role') {
          if(property === 'Email'){
            cardBody += `<p>${property}: <a href="mailto:example@example.com">${employee[property]}</a></p>`
          }
          else if(property === 'GitHub'){
            cardBody += `<p>${property}: <a href="https://github.com/${employee[property]}">${employee[property]}</a></p>`
          }
          else{
          cardBody += `<p>${property}: ${employee[property]}</p>`;
          }
        }
      }
      cardBody += `</div>`;
      employeeCards += `
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h3>${employee.Name}</h3>
            <h4>${employee.role}</h4>
          </div>
          ${cardBody}
        </div>
      `;
    });

    html += employeeCards

    fs.writeFileSync('./output/employeeCards.html', html, 'utf-8');
  })
