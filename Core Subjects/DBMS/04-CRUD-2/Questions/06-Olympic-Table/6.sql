/*
Write an SQL query that sorts the olympic table according to the following rules:

The country with more gold medals should come first.
If there is a tie in the no. of gold medals, the country with more silver medals should come first.
If there is a tie in the no. of silver medals, the country with more bronze medals should come first.
If there is a tie in the no. of bronze medals as well, then the countries with the tie are sorted in ascending order lexicographically.
*/
Select 
    *
From 
    olympic 
Order By    
    gold_medals desc,
    silver_medals desc,
    bronze_medals desc,
    country;