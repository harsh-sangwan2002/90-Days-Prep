/*
Write an SQL query to report the patient_id who have Type I Diabetes.

Patients with Type I Diabetes will have "DIAB1" as prefix in any of the words in the conditions data.
*/
Select 
    patient_id
From 
    patients
Where
    conditions like 'DIAB1%' or
    conditions like '% DIAB1%'
Order By
    patient_id;