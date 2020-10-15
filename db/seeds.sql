INSERT INTO department (name)
VALUES
    ('legal'),
    ('promotions'),
    ('sales');

INSERT INTO role (title, salary, department_id)
VALUES
    ('manager', 65000.50, 2),
    ('engineer', 85000.89, 2),
    ('intern', 7.25, 3),
    ('lawyer', 101000.43, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('jack', 'skellington', 1, null),
    ('sally', 'stitches', 2, 1),
    ('mayor', 'scare', 3, null);