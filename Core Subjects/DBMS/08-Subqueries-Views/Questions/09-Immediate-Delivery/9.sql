/*
If the customer's preferred delivery date is the same as the order date, then the order is called immediate; otherwise, it is called scheduled.

Write a query to find the percentage of immediate orders in the table, rounded to 2 decimal places. 
*/
select round( 
(select count(1) as im from delivery where order_date = customer_pref_delivery_date) * 100
/ (select count(1) as total from delivery),2) as immediate_percentage;