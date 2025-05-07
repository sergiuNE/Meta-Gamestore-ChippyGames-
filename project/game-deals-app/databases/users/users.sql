CREATE DATABASE IF NOT EXISTS users;
USE users;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  mail VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

INSERT INTO users (firstName, lastName, mail, password) VALUES
('Sergiu', 'Neagu', 'neagusergiu11@gmail.com', 'sergiu123'),
('Ilyas', 'Janssesn', 'ilyasjanssens@outlook.com', '15465f4wvc'),
('Andrei', 'Preda', 'andreipreda13@gmail.com', 'predamedia11'),
('Nart', 'Somaf', 'nartsomaf@icloud.com', 'nsmf');
