DROP DATABASE IF EXISTS workplace_db;
CREATE DATABASE workplace_db;
USE workplace_db;

CREATE TABLE departments(
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
    name VARCHAR(50),
    PRIMARY KEY (id)
);

CREATE TABLE roles(
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
    title VARCHAR(50),
    salary DECIMAL(10, 4),
    department_id INTEGER(10),
    FOREIGN KEY (department_id) REFERENCES departments(id),
    PRIMARY KEY (id)
);

CREATE TABLE employees(
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
    first_name VARCHAR (50),
    last_name VARCHAR(50),
    role_id INTEGER(10),
    manager_id INTEGER(10),
    FOREIGN KEY (manager_id) REFERENCES employees(id),
    FOREIGN KEY (role_id) REFERENCES roles(id),
    PRIMARY KEY (id)
);