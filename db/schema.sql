
CREATE DATABASE burgers_db;


USE burgers_db;

CREATE TABLE burgers(
    id INTEGER(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BIT DEFAULT 0
)