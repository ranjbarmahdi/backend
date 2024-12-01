import { DataTypes } from 'sequelize';

import sequelize from '../config/sequelize.config.js';
import Review from './review.model.js';
import AccomodationPrice from './AccomodationPrice.model.js';

const Accomodation = sequelize.define('Accomodation', {
    sku: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lat: DataTypes.STRING(50),
    lon: DataTypes.STRING(50),
    description: DataTypes.TEXT,
    url: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    rating: DataTypes.DECIMAL(3, 2),
    amenities: DataTypes.TEXT,
});

Accomodation.hasMany(Review, {
    foreignKey: {
        allowNull: false,
        onDelete: 'CASCADE',
    },
});

Accomodation.hasMany(AccomodationPrice, {
    foreignKey: {
        allowNull: false,
    },
});

export default Accomodation;
