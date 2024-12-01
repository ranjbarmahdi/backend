import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.config.js';
import Residence from './residence.model.js';

const City = sequelize.define(
    'City',
    {
        name: DataTypes.STRING(50),
    },
    { timestamps: false }
);

City.hasMany(Residence, {
    foreignKey: {
        onDelete: 'SETNULL',
    },
});

export default City;
