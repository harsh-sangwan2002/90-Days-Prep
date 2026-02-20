/*
We want to find all employees who are not present in the job_history table. This indicates they haven't held any jobs previously within the company.

The result should include all columns from the employees table.
The result should to be sorted by employee_id in ascending order for easier reference.
Note:

To get the details of the employee's previous jobs refer to the job_history table.
An employee is present in the job_history table if he/she has worked before. 
*/
Select 
   *
From 
   employees 
Where
   employee_id Not In
   (Select employee_id from job_history)
Order By
   employee_id;