-- IF DATABASE EXISTS -- DROP IT
DROP DATABASE IF EXISTS planets_dev;

-- Create our database! 🪐
CREATE DATABASE planets_dev;

-- Connect to DB
\c planets_dev;

-- Create a table for our planets
CREATE TABLE planets (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  distance_from_earth INTEGER,
  signs_of_life BOOLEAN,
  neighboring_planets VARCHAR(255),
  galaxy VARCHAR(255),
  photo_url VARCHAR(255)
);

-- always drop the table if it exists
DROP TABLE IF EXISTS reviews;

-- Create a table for our planets reviews
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  reviewer VARCHAR(255),
  title VARCHAR(255),
  content TEXT,
  rating INTEGER,
  planet_id INTEGER REFERENCES planets(id)
);
