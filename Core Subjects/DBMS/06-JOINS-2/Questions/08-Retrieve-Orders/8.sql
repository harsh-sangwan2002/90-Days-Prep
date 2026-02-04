/*
Write an SQL query to retrieve the names of authors who haven't published any books.
Include NULL values for book-related columns.

Return the output ordered by author_name in ascending order.
*/
Select 
    a.author_id,
    a.author_name,
    b.book_title
From 
    Authors a
Left Join
    Books b 
On
    a.author_id = b.author_id 
Where
    b.book_id Is Null
Order By
    a.author_name;