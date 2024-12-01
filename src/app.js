import 'dotenv/config';

import express from 'express';
import sequelize from './config/sequelize.config.js';
import models from './models/initial.js';
import connectToChannel from './config/rabbitmq.config.js';
import initialConsumers from './consumers/initial.js';

const app = express();

(async function startAsync() {
    await sequelize.sync({ alert: true });
    console.log('initualize');

    const channel = await connectToChannel();
    await initialConsumers(channel);
})();

export default app;
