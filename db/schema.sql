CREATE DATABASE eatzBurgers;

use eatzBurgers;

CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(100) NOT NULL,
devoured BOOLEAN NOT NULL,
date TIMESTAMP NOT NULL,
PRIMARY KEY (id)
);