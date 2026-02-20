/* YOUR QUERY GOES HERE
   Example: SELECT * FROM EMPLOYEE; 
*/
SELECT customer_id from customer
group by customer_id
having count(distinct product_key) = (SELECT count(*) as total from product);