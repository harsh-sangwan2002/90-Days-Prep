/*
You are required to write a query to find the IDs of users who requested a confirmation message twice within a 24-hour window. This is crucial for implementing measures to improve the security protocols.

Note:

Two messages exactly 24 hours apart are considered to be within the window.
The action does not affect the answer, only the request time.
The result table should be ordered by user_id in an ascending manner.
*/
Select 
    distinct c1.user_id
From 
    confirmations c1
Join
    confirmations c2 
On
    c1.user_id = c2.user_id And
    c2.time_stamp Between Date_add(c1.time_stamp, interval 1 second) And
    Date_add(c1.time_stamp, interval 1 day)
Order By
    c1.user_id;