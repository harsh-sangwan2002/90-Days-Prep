/*
Write an SQL query to report the number of cubic feet of volume the inventory occupies in each warehouse.

Return the results ordered by warehouse_name in ascending order.

The query result format is in the following example.
*/
Select 
    w.name warehouse_name,
    Sum(Width*Length*Height*units) volume
From 
    Warehouse w 
Join
    Products p 
On
    w.product_id = p.product_id
Group By
    w.name
Order By 
    name;