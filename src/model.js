import { Model, DataTypes } from 'sequelize'
import util from 'util'
import url from 'url'
import connectToDB from './db.js'

class Animal extends Model {}
Animal.init(
    {
        animal_id:{
            type: DataTypes.STRING,
            primaryKey: true,
        },
        species:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        favorite_food:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        modelName: 'animal',
        sequelize: db,
    }

);

class Habitat extends Model {}
Habitat.init(
    {
        habitat_id:{
            type: DataTypes.STRING,
            primaryKey: true,
        },
        habitat:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        modelName: 'habitat',
        sequelize: db,
    }

);

Animal.belongsToMany(Habitat, { through: 'AnimalHabitats' });
Habitat.belongsToMany(Animal, { through: 'AnimalHabitats' });


export const db = await connectToDB('postgresql:///review')