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

/*
1. Having - allows you to filter groups
2. Where - allows you to filter rows
*/

/*
for each row1 in A:
    for each row2 in B:
        if(cond1 is true)
            ans.add(row1+row2)

for each row in ans:
    if(cond2 is true)
        ans2.add(row)

// Group By
Map<Group by col> b_name_groups

for each row in ans:
    b_name_groups[row[b_name]].insert(row)

for each row in b_name_groups:
    if(cond3 is true / Having clause)
        print(b_name)
*/
Select count(s.id), b_name
From Students s
Join Batches b
On s.b_id = b.id
Group By b.name
Having count(s._id) > 100;

-- We cannot use Where after group by, it should come after From/Join

/*
From -> Join/On -> Where -> Group By -> Having -> Select
-> Order By -> Limit -> Offset
*/