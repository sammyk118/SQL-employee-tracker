USE workplace_db;

INSERT INTO departments (name) VALUES ("HR"), ("Sales"), ("Engineering"), ("IT");

INSERT INTO roles (title, salary, department_id) VALUES ("Senior HR", 100, 1), ("Sales associate", 80, 2), ("Senior engineer", 120, 3), ("Network administrator", 70, 4);

INSERT INTO employees (first_name, last_name, role_id) VALUES ("Mike", "Kroner", 1), ("Jen", "Ferguson", 1), ("Dave", "mitchell", 2), ("Katie", "Richter", 3), ("Gina", "Maxwell", 4);