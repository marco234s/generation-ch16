SELECT * FROM sakila.film;

SELECT * FROM language; 

SELECT customer_id, SUM(amount) FROM payment GROUP BY customer_id 