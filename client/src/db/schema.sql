DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(255),
    password_hash VARCHAR(255),
    username VARCHAR(50),
    photo_path VARCHAR(255)
);