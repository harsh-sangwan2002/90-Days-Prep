/*
Write a query to report all the sessions that did not get shown any ads.

Result:

Return the column 'session_id'
Return the resultant table ordered by session_id in ascending order.
*/
Select 
    distinct session_id
From 
    Playback p 
Join
    Ads a 
On
    p.customer_id = a.customer_id And
    (timestamp < start_time or timestamp > end_time)
Order By
    session_id;