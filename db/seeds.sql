INSERT INTO department (name)
VALUES
    ('Legal'),
    ('Promotions'),
    ('Sales'),
    ('Entertainment');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Engineer', 85000.99, null),
    ('Intern', 7000.00, 2),
    ('Lawyer', 101000.50, 1),
    ('Manager', 65000.00, null),
    ('Legal Assistant', 30000.00, 1),
    ('Salesperson', 20000.99, 3),
    ('Talent', 75000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Mayor of', 'Halloween Town', 4, null),
    ('Dr.', 'Finkelstein', 1, null),
    ('Jack', 'Skellington', 7, 1),
    ('Sally', 'NoName', 5, 2),
    ('Oogie', 'Boogie', 7, null),
    ('Lock', 'the Devil', 2, 3),
    ('Shock', 'the Witch', 2, 3),
    ('Barrel', 'the Skeleton', 2, 3),
    ('Sandy', 'Claws', 3, null),
    ('Tim', 'Burton', 6, null);