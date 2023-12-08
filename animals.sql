DROP TABLE IF EXISTS animals;
DROP TABLE IF EXISTS habitats;

CREATE TABLE habitats(
    habitat_id INTEGER SERIAL PRIMARY KEY,
    habitat VARCHAR(25) NOT NULL,
);

CREATE TABLE animals(
    animal_id INTEGER SERIAL PRIMARY KEY,
    species VARCHAR(100) NOT NULL,
    name VARCHAR(20) NOT NULL,
    favorite_food VARCHAR(20) NOT NULL,
    habitat_id INTEGER REFERENCES habitats(habitat_id)
);

INSERT INTO habitats(habitat)
VALUES ('ocean'),
('arctic'),
('savannah'),
('steppe'),
('mountain'),
('grassland'),
('forest')

INSERT INTO animals(species,name,favorite_food,habitat_id)
VALUES ('Penguin','Bubbles','Raw Fish',2),
('Polar Bear','Fluffy','Raw Fish',2),
('Lion','Snuggles','Raw Meat',3),
('Antelope','Michael','Grass',4),
('Bison','Marvin the Insatiable','Grass',4),
('Moon Fish','Hibiscus','Raw Fish',1),
('Whale Shark','Steve','Plankton',1),
('Cougar','Stella','Raw Meat',5),
('Badger','Norman','Raw Meat',6),
('Prairie Dog','Steve','Grass',6),
('Boar','Rawland','Grass',7),
('Panda','Squishy','Bamboo',7)