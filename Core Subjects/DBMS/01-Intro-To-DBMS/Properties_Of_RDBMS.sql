use testdb;

Create table Test(
id INT,
name VARCHAR(60)
);

-- Two rows can have same set of values for all the columns
Insert Into Test Values
(1,'A'),
(1,'A');

Select * from Test;

-- Every columns must have a unique name
Create table Test2(
id INT,
id VARCHAR(60)
);