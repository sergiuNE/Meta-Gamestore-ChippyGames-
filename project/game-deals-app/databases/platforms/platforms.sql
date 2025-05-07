CREATE DATABASE IF NOT EXISTS platforms;

USE platforms;

CREATE TABLE IF NOT EXISTS tbl_platform (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

INSERT INTO tbl_platform (name) VALUES 
  ('PC'),
  ('PlayStation 4'),
  ('PlayStation 5'),
  ('Xbox'),
  ('Nintendo');
