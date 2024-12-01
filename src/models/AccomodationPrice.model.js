import { DataTypes } from 'sequelize';

import sequelize from '../config/sequelize.config.js';

const AccomodationPrice = sequelize.define(
    'AccomodationPrice',
    {
        url: DataTypes.STRING,
        price: {
            type: DataTypes.DOUBLE.UNSIGNED,
            allowNull: false,
            validate: {
                minPrice(value) {
                    if (value < 0) {
                        throw new Error('Price must be greater than or equal to 0.');
                    }
                },
            },
        },
        date: DataTypes.DATEONLY,
        validUntil: DataTypes.DATE,
        scrapedAt: DataTypes.DATE,
        availible: {
            type: DataTypes.BOOLEAN,
            defaultVaue: false,
        },
        isInstant: {
            type: DataTypes.BOOLEAN,
            defaultVaue: false,
        },
    },
    { timestamps: true }
);

export default AccomodationPrice;
