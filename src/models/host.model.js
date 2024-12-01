import { DataTypes, DATE } from 'sequelize';
import sequelize from '../config/sequelize.config.js';
import AccomodationPrice from './AccomodationPrice.model.js';

const Host = sequelize.define(
    'Host',
    {
        name: {
            type: DataTypes.STRING(50),
            unique: true,
        },
        domain: {
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false,
        },
        available: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    },
    { timestamps: false }
);

Host.hasMany(AccomodationPrice, {
    foreignKey: {
        allowNull: false,
    },
});

export default Host;
