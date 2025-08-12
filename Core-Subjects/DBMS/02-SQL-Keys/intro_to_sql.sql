use testdb;

create table batches(
batch_id int primary key,
batch_name varchar(20) not null
);

insert into batches(batch_id, batch_name)
values 
(1,'A'),
(2,'B'),
(3,'C');

select * from batches;