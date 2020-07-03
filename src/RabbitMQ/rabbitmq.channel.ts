import { Channel } from "amqplib";

/**
 * Singleton class, acting as a
 * wrapper for the amqp channel object.
 *
 * @export
 * @class RabbitMQChannel
 */
export class RabbitMQChannel {
  private readonly channel: Channel;
  private static instance: RabbitMQChannel;

  private constructor(channel: Channel) {
    this.channel = channel;
  }

  public getChannel(): Channel {
    return this.channel;
  }

  public static getInstance(value?: Channel): RabbitMQChannel {
    if (!this.instance) this.instance = new RabbitMQChannel(value);
    return this.instance;
  }

}