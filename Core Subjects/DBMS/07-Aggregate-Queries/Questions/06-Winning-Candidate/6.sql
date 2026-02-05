/*
Write an SQL query to report the name of the winning candidate (i.e., the candidate who got the largest number of votes).

The test cases are generated so that exactly one candidate wins the elections.
*/
Select 
    firstname
From 
    candidate c 
Join
    vote v 
On
    c.id = candidateId
Group By
    candidateId
Order By
    count(candidateId) desc
Limit 1;