import IQueueTemplate from "../Interfaces/IQueueTemplate";
import { ConsumeMessage } from "amqplib";
import { injectable } from "inversify";

@injectable()
export class RabbitMQTemplate implements IQueueTemplate {

  registerListener(queueOptions: any, listener: (msg: ConsumeMessage) => void): Promise<void> {
    return Promise.resolve();
  }

}