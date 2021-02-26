const inquirer = require("inquirer");
const fs = require("fs");
const manager = require("");
const engineer = require();
const intern = require();
const employees = [];

appInitialize = () => {
    launchHtml();
    addEmplyee();
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

})

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

    })
    


}