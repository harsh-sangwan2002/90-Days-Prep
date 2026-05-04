create database testdb;

use testdb;

drop table Batches;
drop table Students;

Create table Batches(
id INT Primary Key,
name VARCHAR(60) Not Null
);

Create table Students(
id INT AUTO_INCREMENT Primary Key,
first_name VARCHAR(60) Not Null,
last_name VARCHAR(60) Not Null,
batch_id INT,
Foreign Key (batch_id) References Batches(id) On Delete Cascade On Update Cascade
);

Insert Into Batches(id, name)
Values (1, 'Batch A'),
(2, 'Batch B'),
(3, 'Batch C');

Insert Into Students
Values (1, 'Harsh', 'Sangwan', 1),
(2, 'Arvind', 'Sangwan', 1),
(3, 'Vinay', 'Dabas', 2);

Delete from Students Where id = 1;
Delete from Batches Where id = 3;
Delete from Batches Where id = 1;

Truncate table Students;
Truncate table Batches;

Drop table Students;