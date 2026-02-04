/*
Write an SQL query to combine all unqiue entries from Customers1 and Customers2.

Return the output ordered by customer_name in descending order. 
*/
Select * From Customers1 Union
Select * From Customers2
Order By customer_name desc;