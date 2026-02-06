/*
Write an SQL query to find the average selling price (as 'average_price') for each product.
Return the result ordered by product_id in ascending order.

Note:
1. Ensure that each product purchase_date is in between its corresponding start_date and end_date.
2. average_price should be rounded to 2 decimal places.
*/
Select
    p.product_id,
    Round(Sum(units*price)/Sum(units),2) average_price
From 
    prices p 
Join
    unitsSold u 
On
    p.product_id = u.product_id And
    purchase_date Between start_date and end_date
Group By
    p.product_id
Order By 
    p.product_id;