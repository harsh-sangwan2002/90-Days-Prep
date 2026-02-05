use testdb;

create table Customers1(
customer_id INT Primary Key,
customer_name Varchar(60)
);

create table Customers2(
customer_id INT Primary Key,
customer_name Varchar(60)
);

Insert Into Customers1 Values
(1, 'Alice'),
(2, 'Bob'),
(3,'Carol');

Insert Into Customers2 Values
(3, 'David'),
(4, 'Eve'),
(5,'Frank');

Select * from Customers1 Union All
Select * from Customers2;