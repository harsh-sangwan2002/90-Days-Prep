/*
Each row of this table contains information of one element.
type is an ENUM of type ('Metal', 'Nonmetal', 'Noble')

If type is Noble, electrons is 0.
If type is Metal, electrons is the number of electrons that one atom of this element can give.
If type is Nonmetal, electrons is the number of electrons that one atom of this element needs.


Two elements can form a bond if one of them is 'Metal' and the other is 'Nonmetal'.
Write an SQL query to find all the pairs of elements that can form a bond.

Return the result ordered by metal in alphabetical order.
The query result format is in the following example.

*/
Select 
    e1.symbol metal,
    e2.symbol nonmetal
From 
    Elements e1
Join
    Elements e2
On
    e1.type = "Metal" And
    e2.type = "Nonmetal"
Order By
    metal;