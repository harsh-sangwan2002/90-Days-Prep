/*
Write an SQL query to report all the consecutive available seats in the cinema.

Return the result table ordered by seat_id.

The test cases are generated so that more than two seats are consecutively available.
seat_id is an auto-increment primary key column for this table.
Each row of this table indicates whether the ith seat is free or not. 1 means free while 0 means occupied.
*/
Select
    seat_id
From 
    cinema c1
Where
    free = 1 and
    ((Select free from cinema where seat_id=c1.seat_id-1) or
    (Select free from cinema where seat_id=c1.seat_id+1))
Order By
    c1.seat_id