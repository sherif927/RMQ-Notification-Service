import IQueueTemplate from "../Interfaces/IQueueTemplate";
import { ConsumeMessage } from "amqplib";
import { injectable } from "inversify";
import { RabbitMQChannel } from "./rabbitmq.channel";

@injectable()
export class RabbitMQTemplate implements IQueueTemplate {
  public async registerListener(queue: string, listener: (msg: ConsumeMessage) => void): Promise<void> {
    let channel = RabbitMQChannel.getInstance().getChannel();
    await channel.assertQueue(queue).catch(error => { throw error });
    channel.consume(queue, listener);
    return Promise.resolve();
  }
}