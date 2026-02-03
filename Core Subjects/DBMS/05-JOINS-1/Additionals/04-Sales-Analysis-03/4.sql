/*
Write an SQL query to fetch the names of the top 2 products which had the highest sale_amount.
*/
Select 
    p.product_name,
    s.sale_amount
From 
    Sales s 
Join
    Products p
On
    s.product_id = p.product_id
Order By
    s.sale_amount desc
Limit 2;