Use testdb;

-- You can only select columns that are either in the GROUP BY clause or wrapped inside an aggregate function.
Select batch_id, count(batch_id)
From Students
Group By batch_id;