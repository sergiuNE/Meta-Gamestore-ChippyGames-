DROP DATABASE IF EXISTS deals;
CREATE DATABASE deals;
USE deals;

CREATE TABLE deals (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  deal VARCHAR(50) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  gameId int not null
);

INSERT INTO deals (title, deal, price, gameId) VALUES 
('Elden Ring', '20%', 60.00, 1),
('Grand Theft Auto V', '25%', 45.00, 2);
