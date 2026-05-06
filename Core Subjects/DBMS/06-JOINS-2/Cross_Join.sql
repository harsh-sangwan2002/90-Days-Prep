use testdb;

-- Can put up a condition in cross join
Select *
From Students s
Cross Join Batches b
On 1>2;

-- Cannot put a condition in implicit join
Select *
From Students, Batches;