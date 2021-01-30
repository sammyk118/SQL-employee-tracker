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
                    connection.end(function (err) {
                        console.log("connection terminated");
                    });
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
    var query = "SELECT * FROM employees";
    connection.query(query, function (err, res) {
        console.log("\nEmployees:")
        res.forEach(employees => {
            console.log(`Id: ${employees.id} || Name: ${employees.first_name} ${employees.last_name} || Role Id: ${employees.role_id} || Manager Id: ${employees.manager_id}`);
        })
        console.log("\n");
        beginPrompt();
    })
}

function viewRoles() {
    console.log("view roles");
    var query = "SELECT * FROM roles";
    connection.query(query, function (err, res) {
        console.log("\nRoles: ");
        res.forEach(roles => {
            console.log(`Id: ${roles.id} || ${roles.title} || ${roles.salary} || ${roles.department_id}`)
        })
        console.log("\n")
        beginPrompt();
    })
}

function viewDept() {
    var query = "SELECT * FROM departments";
    connection.query(query, function (err, res) {
        console.log("\nDepartments:");
        res.forEach(departments => {
            console.log(`Id: ${departments.id} || Name: ${departments.name}`)
        })
        console.log("\n")
        beginPrompt();
    })
}

function updateRoles() {
    console.log("update roles");
}




beginPrompt();