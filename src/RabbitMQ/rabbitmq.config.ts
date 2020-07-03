import amqp, { Connection, Channel } from 'amqplib';
import { RabbitMQChannel } from './rabbitmq.channel';

/**
 * bootstrapping the configuration of RabbitMQ
 * connecting to the server , creating the queues
 * and returning the channel object for functionality
 * extentions.
 *
 * @returns {Promise<Channel>}
 */
export async function bootstrapRMQ(): Promise<void> {
  let connection: Connection = await amqp.connect('amqp://localhost').catch((e) => { throw e });
  let channel: Channel = await connection.createChannel().catch((e) => { throw e });
  RabbitMQChannel.getInstance(this.channel);
}