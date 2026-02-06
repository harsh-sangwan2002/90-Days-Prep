/*
Write a query to find the cities where employees have a minimum income greater than $2000.

Save the new column as 'Minimum_Income'
Round Minimum_Income up to two decimal places.
Return the result order by the City in ascending order.
*/
Select 
    City,
    Round(Min(Income),2) Minimum_Income
From 
    employees 
Group By
    City
Having
    Round(Min(Income),2) > 2000
Order By 
    City;