Use testdb;

Create table Employees2(
id INT Primary Key,
name Varchar(60),
manager_id INT
);

Drop table Employees2;

Insert Into Employees2 Values
(1,'Alice',null),
(2,'Bob',1),
(3,'Carol',1),
(4,'David',2),
(5,'Eve',2);

Select
    distinct *
From
    Employees2 e1
Join
    Employees2 e2
On
    e1.manager_id = e2.manager_id
Join
	Employees2 e3
On
	e1.manager_id = e3.id;