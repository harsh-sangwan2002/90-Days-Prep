/*
Write a query to report the names of all sellers who did not make any sales in 2020.

Return the result table ordered by seller_name in ascending order. 
*/
Select 
    s.seller_name
From 
    Seller s
Left Join
    Orders o 
On
    s.seller_id = o.seller_id
Where
    o.order_id Is Null
Order By
    s.seller_name;