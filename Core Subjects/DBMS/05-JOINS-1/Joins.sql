use testdb;

Select s.name, b.name
From Students s
Join Batches b
On s.batch_id = b.id;

-- It is not mandatory to have equality condition in "On" clause
Select s.name, b.name
From Students s
Join Batches b
On s.batch_id < b.id;

-- It will return N*M rows (Cross Join)
Select s.name, b.name
From Students s
Join Batches b
On 1<2;