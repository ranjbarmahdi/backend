import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.config.js';

const User = sequelize.define('User', {
    firstName: DataTypes.STRING(100),
    lastName: DataTypes.STRING(100),
    email: {
        type: DataTypes.STRING(100),
        unique: true,
    },
    password: DataTypes.STRING,
    phone_number: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true,
    },
    birthData: DataTypes.DATEONLY,
    lastLogin: DataTypes.DATE,
});

export default User;
