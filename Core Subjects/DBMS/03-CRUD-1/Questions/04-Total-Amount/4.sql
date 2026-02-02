/*
Write a query to calculate the sub_total for each order line and return the columns orderNumber, productCode, and sub_total.

To get the sub_total for each orderNumber, it is calculated by multiply the quantityOrdered column by the PriceEach column.
Round off the sub_total up to two decimal places.
Order the results by orderNumber in ascending order and sub_total in descending order.
*/
Select
    orderNumber,
    productCode,
    round(quantityOrdered*priceEach,2) As sub_total
From
    orderDetails 
Order By
    orderNumber,
    sub_total desc;