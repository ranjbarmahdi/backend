import { jalaliToGregorianDate } from '../utils/date.utils.js';

export default async function upsertPriceConsumer(channel) {
    const QUEUE_NAME = 'prices';

    await channel.assertQueue(QUEUE_NAME, { durable: true });

    channel.consume(QUEUE_NAME, async (msg) => {
        if (msg?.content) {
            const price = JSON.parse(msg.content.toString());
            console.log(price);
        }
    });
}
