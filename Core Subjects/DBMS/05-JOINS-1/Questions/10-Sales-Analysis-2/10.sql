/*
Write an SQL query to fetch the names of the employees who sold ‘Laptop’.

Return the output ordered by employee_name in ascending order.
*/
Select 
    distinct e.employee_name
From 
    Sales s 
Join
    Products p 
On 
    s.product_id = p.product_id And
    p.product_name = "Laptop"
Join 
    Employees e 
On 
    s.employee_id = e.employee_id
Order By
    e.employee_name;