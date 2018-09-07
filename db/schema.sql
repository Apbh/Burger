DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
 id INT NOT NULL AUTO_INCREMENT,
 burger_name VARCHAR(100) NOT NULL,
 devoured BOOLEAN DEFAULT FALSE,
 PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Spicy Chicken Melt", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Aha Tuna Twist", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Good Old Cheeseburger", false);

SELECT * FROM burgers_db.burgers;
