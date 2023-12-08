// INSTRUCTIONS //
/* 
    To start this review, run the following commands: 
    npm init -y
    npm i sequelize pg pg-hstore 
*/
/* 
    Once you've run those commands, go into your package.json file.
    Underneath "main": "db.js", add another key-value pair:
    "type": "module"
    Don't forget commas!
    Lastly, run the following commands to start your data:
    createdb review
    psql -d review -f animals.sql
*/
/*
    PART 1 -- Create a data model
    You are tasked by a zoo to collect data about their animals, and their habitats.
    They need the following tables for their data -- create these in model.js using sequelize
    Animals
        --animal_id
        --species
        --name
        --favorite_food
    Habitats
        --habitat_id
        --habitat
    Remember to use camelCasing, and singular nouns
    Also don't forget to create a table relationship between habitats and animals.
*/
/*
    PART 2 -- Write queries 
    (Remember to console log your answers or steps along the way!)
    1 -- Get the animal with the primary key of 5
    2 -- Get the first animal with the name of 'Steve'
    3 -- Get all animals that live in the habitat with id 7
    4 -- Get all animals that like Raw Fish
    5 -- Get all animals whose names start with the letter 'S'
    6 -- Get all the animals that live in habitat with ids 2 or 5
    7 -- Get all the animals that don't like Raw Meat
*/

/* 
    Part 3 -- Write functions
    1 -- Write a function that prints the each habitat once, and all the animals that live in that habitat once. (You'll need a nested for loop)
    2 -- Write a function that receives a habitat as a parameter.
    Using that parameter, create and return an object out of the function, that has the name of each animal in that habitat as keys, and that animal's species as the value.
*/

import { db,Animal,Habitat } from './model.js'

await db.sync()
// CODE GOES BELOW HERE



// CODE GOES ABOVE HERE
await db.close()