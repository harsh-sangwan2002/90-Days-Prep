/*
Write an SQL query to get the names of products that have at least 100 units ordered in February 2022 and their amount. 
*/
Select 
    product_name,
    Sum(unit) unit
From 
    products p 
Join
    orders o 
On
    p.product_id = o.product_id And
    order_date like '2022-02%'
Group By
    o.product_id
Having
    Sum(unit) >= 100;