/*
You are part of the HR department at a tech company that is currently hiring for a Data Science position. To ensure that you select the best candidates for the job, you need to filter out candidates who have the essential skills required for the role. Specifically, you are looking for candidates who are proficient in 'Python', 'Tableau', and 'MySQL'.

Problem Description:

Given a list of candidates and their skills, write a SQL query to find the candidates who possess all three required skills for the Data Science position.

Note that there are no duplicates in the candidates table.
Return the result ordered by candidate_id in ascending order. 
*/
Select 
    distinct candidate_id
From 
    candidates
Where
    skill In ("Python","Tableau","MySQL")
Group By
    candidate_id
Having
    count(Distinct skill) >= 3;