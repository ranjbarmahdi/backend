import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.config.js';

const Review = sequelize.define('Review', {
    comment: DataTypes.TEXT,
    rating: DataTypes.DECIMAL(3, 2),
});

export default Review;
