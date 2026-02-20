/*
Write a query to report the names of all the salespersons who did not have any orders related to the company named "RED".

Result:

Return the result table with the column 'name' and order it in ascending order.
*/
Select
    distinct s.name
From 
    salesperson s 
Left Join
    orders o 
On
    s.sales_id = o.sales_id
Left Join 
    company c 
On 
    o.com_id = c.com_id
Where
    c.name != "RED" or c.com_id Is Null
Order By
    s.name;