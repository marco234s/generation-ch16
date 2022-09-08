SELECT * FROM sakila.payment;

SELECT * FROM payment; 

-- SUM(), AVG(), COUNT() 

SELECT customer_id, amount FROM payment;

-- 		COUNT () cuenta las filas de una tabla 
SELECT COUNT(*) AS "Cantidad de filas" FROM payment;

SELECT COUNT(*) AS "Cantidad de paises" FROM world.country;

-- Cantidd de rentas que tuvo el trabajador 2

SELECT COUNT(*) FROM payment WHERE staff_id = 1; 

-- Cantidad de clientes distintos
SELECT COUNT(DISTINCT customer_id) FROM payment; 

/*
SUM()
*/

SELECT SUM(amount) AS "Total de rentas" FROM payment;
SELECT SUM(amount) AS "Total de rentas del trabajador 2" FROM payment WHERE staff_id = 2;

-- ¿Cual cliente realizo mas rentas?

SELECT customer_id, COUNT(*) FROM payment GROUP BY customer_id ORDER BY COUNT(*) ASC;

-- Group BY - Agrupa perp omite los valores repetidos
-- Order BY - ORDENA SEGUN LA COLUMNA O FUNCION QUE le indiquemos ASC / DESC
SELECT * FROM payment ORDER BY staff_id;
SELECT * FROM payment GROUP BY staff_id;

-- ¿Cual cliente  gasto mas?
SELECT customer_id, SUM(amount) AS total FROM payment GROUP BY customer_id ORDER BY total DESC;

-- AVG() - regra el promedio
SELECT AVG (amount) AS Promedio FROM payment; 

-- C¿Cual cliente gasto mas en promedio?
SELECT customer_id, AVG(amount) FROM payment GROUP BY customer_id ORDER BY AVG(amount) DESC;
