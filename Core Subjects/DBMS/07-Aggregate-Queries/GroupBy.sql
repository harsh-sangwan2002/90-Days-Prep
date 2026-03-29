Use testdb;

-- You can only select columns that are either in the GROUP BY clause or wrapped inside an aggregate function.
Select batch_id, count(batch_id)
From Students
Group By batch_id;

-- Wrong query - Contains nonaggregated columns
Select *, count(*)
From Students s
Join Batches b
On s.batch_id = b.id
Group By b.name;

Select b.name, count(*)
From Students s
Join Batches b
On s.batch_id = b.id
Where s.batch_id = 1
Group By b.name;