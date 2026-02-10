use testdb;

Select * from Students_Buddy;

Select *
From Students_Buddy s
Join Students_Buddy b
On s.buddy_id = b.id;

Select s.name, b.name
From Students_Buddy s
Join Students_Buddy b
On s.buddy_id = b.id;