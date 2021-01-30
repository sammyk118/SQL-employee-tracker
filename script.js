var mysql = require("mysql");
var inquirer = require("inquirer");
const { allowedNodeEnvironmentFlags } = require("process");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "workplace_db"
});

connection.connect(function (err) {
    if (err) throw err;
    beginPrompt();
});

function beginPrompt() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "Add employee",
                "Add role",
                "Add department",
                "View employees",
                "View roles",
                "View departments",
                "Update employee roles",
                "Exit"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "Add employee":
                    addEmployee();
                    break;
                case "Add role":
                    addRole();
                    break;
                case "Add department":
                    addDepartment();
                    break;
                case "View employees":
                    viewEmp();
                    break;
                case "View roles":
                    viewRoles();
                    break;
                case "View departments":
                    viewDept();
                    break;
                case "Update employee roles":
                    updateRoles();
                    break;
                case "Exit":
                    connection.end();
        }
        })
    
}

function addEmployee() {
    console.log("add employee");
}

function addRole() {
    console.log("add role");
}

function addDepartment() {
    console.log("add department");
}

function viewEmp() {
    console.log("view employees");
}

function viewDept() {
    console.log("view departments");
}

function updateRoles() {
    console.log("update roles");
}




beginPrompt();