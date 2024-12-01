import upsertPriceConsumer from './updatePrice.consumer.js';

export default async function initialConsumers(channel) {
    await upsertPriceConsumer(channel);
    console.log('consumers initialized');
}
