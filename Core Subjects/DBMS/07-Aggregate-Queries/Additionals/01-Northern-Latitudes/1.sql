/*
The goal is to write an SQL query to get the greatest value of the Northern Latitudes (lat_n) as max from the station table which is less than 138.2523. Additionally, the maximum value should be rounded to four decimal places for reporting purposes.
*/
Select 
    round(max(lat_n),4) max
From 
    station
Where
    lat_n < 138.2523;