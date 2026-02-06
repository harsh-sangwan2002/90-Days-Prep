/*
Write a query to find the customer_id and customer_name of customers who bought products "Bread" and "Milk" but did not buy the product "Eggs".


Result:

Return the columns customer_id and customer_name
Return the output ordered by customer_name in ascending order 
*/
SELECT 
    c.customer_id, c.customer_name
FROM 
    customers c
JOIN 
    orders o
On
    c.customer_id = o.customer_id
GROUP BY 
    c.customer_id, c.customer_name
HAVING 
    SUM(o.product_name = 'Bread') > 0 AND SUM(o.product_name = 'Milk') > 0 AND SUM(o.product_name = 'Eggs') = 0
ORDER BY 
    c.customer_name;