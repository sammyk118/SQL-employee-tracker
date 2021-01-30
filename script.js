var mysql = require("mysql");
var inquirer = require("inquirer");

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

function addDepartment() {
    inquirer
        .prompt({
            name: "addDept",
            type: "input",
            message: "Enter the name of the department to add"
        })
        .then(function (answer) {
            console.log(answer.addDept);
            var query = "INSERT INTO departments (name) VALUES (?)";
            connection.query(query, [answer.addDept], function (err, res) {
                console.log(`Added department ${answer.addDept} to the database`)
            })
            beginPrompt();
    })
}

function viewEmp() {
    console.log("view employees");
    var query = "SELECT emp.first_name, emp.last_name, role.title, dep.name AS departments, role.salary, CONCAT(mng.first_name, ' ', mng.last_name) AS manager FROM employees emp ";
    query += "LEFT JOIN roles role ON emp.role_id = role.id ";
    query += "LEFT JOIN departments dep ON dep.id = role.department_id ";
    query += "LEFT JOIN employees mng ON mng.id = emp.manager_id";
    console.log
    connection.query(query, function (err, res) {
        console.log("\nEmployees:")
        console.table(res);
        console.log("\n");
        beginPrompt();
    })
}

function viewRoles() {
    console.log("view roles");
    var query = "SELECT * FROM roles";
    connection.query(query, function (err, res) {
        console.log("\nRoles: ");
        console.table(res);
        console.log("\n")
        beginPrompt();
    })
}

function viewDept() {
    var query = "SELECT * FROM departments";
    connection.query(query, function (err, res) {
        console.log("\nDepartments:");
        console.table(res);
        console.log("\n")
        beginPrompt();
    })
}

function addEmployee() {
    console.log("add employee");
    var query = "INSERT "
}

function addRole() {
    console.log("add role");
}
function updateRoles() {
    console.log("update roles");
}




