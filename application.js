const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./construct-function/manager");
const Engineer = require("./construct-function/engineer");
const Intern = require("./construct-function/intern");

const employees = [];

appInitialize = () => {
    launchHtml();
    addEmployee();
}
addEmployee = () => {
    inquirer.prompt([{
        message: "Enter Name of Team Member",
        name: "name"
    },

    {
        type: "list",
        message: "Select the team member's role",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
        ],
        
        name: "role"
    },
    {
        message: "Enter team member's id",
        name: "id",
    },
    {
        message: "Enter team member's email",
        name: "email"
    }
]).then(({name, role, id, email}) => {
    let roleData = "";
    if (role === "Manager") {
        roleData = "office phone number"
    } else if (role === "Engineer") {
        roleData = "GitHub username"
    } else {
        roleData ="school name"
    }


    inquirer.prompt([{
        message: `Enter team menmber's ${roleData}`,
        name: "roleData"
    },
    {
        type: "list",
        message: "Would you like to add more team members?",
        choices:[
            "yes",
            "no"
        ],
        name: "membersAdded"
    }]).then(({roleData, membersAdded}) =>{
        let newEmployee
        if (role === "Manager"){
            newEmployee = new Manager (name, id, email, roleData)
        } else if (role === "Engineer") {
            newEmployee = new Engineer (name, id, email, roleData)
        } else {
            newEmployee = new Intern(name, id, email, roleData)
        }
        employees.push(newEmployee);
        addHtml(newEmployee)
        .then(function() {
            if (membersAdded === "yes") {
                addEmployee();
            } else {
                endHtml()
            }
        });

        });
    });

}

launchHtml = () => {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-danger mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./output/team-profile.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("begin");
}

function addHtml(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Manager") {
            const officeNumber = member.getNumber();
            data = `<div class="col-4">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header bg-info">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush bg-light">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Number: ${officeNumber}</li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Engineer") {
            const gitHub = member.getGitHub();
            data = `<div class="col-4">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header bg-info">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush bg-light">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Intern") { 
            const school = member.getSchool();
            data = `<div class="col-4">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header bg-info">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flushbg bg-light">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`
        }
        console.log("adding team member");
        fs.appendFile("./output/team-profile.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });  
    
}

function endHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./output/team-profile.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}

appInitialize();
    


