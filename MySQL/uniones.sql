USE tienda; 

/*INSERT INTO compra(cliente_id, fecha_compra, total, cantidad_productos)
values (3, '2022-09-07', 100, 1);*/
-- Inner Join
-- Explicita 

SELECT *
FROM clientes
INNER JOIN compra
ON clientes.nombre_id = compra.orden_id;

SELECT 
clientes.cliente_id AS "Numero de cliente" ,
clientes.nombre AS Nombre,
compra.fecha_compra
FROM clientes
INNER JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- Union implicita
SELECT * 
FROM clientes, compra
WHERE clientes.cliente_id = compra.cliente_id;

-- LEFT JOIN 
SELECT *
FROM clientes
LEFT JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- RIGHT JOIN
SELECT *
FROM clientes
RIGHT JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- Mostrar las direcciones de cada pais 
USE sakila; 

/*
address - city_id / address
city - city_id / city / country_id
*/

SELECT 
address-address,
city.city,
city.country_id
FROM address
INNER JOIN city
ON address.city_id = city.city_id;

SELECT 
country.country AS Pais, 
city.city AS Ciudad,
address.address AS Direccion
FROM country
INNER JOIN city ON country.country_id = country.country_id
INNER JOIN address ON address.city_id = city.city_id;






