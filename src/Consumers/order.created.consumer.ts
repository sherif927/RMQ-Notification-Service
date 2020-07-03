import { injectable, inject, named, postConstruct } from "inversify";
import IConsumer from "../Interfaces/IConsumer";
import Identifiers from '../Constants/identifiers';
import { RabbitMQTemplate } from "../RabbitMQ/rabbitmq.template";
import { OrderReducer } from "../Reducers/order.reducer";
import { ConsumeMessage } from "amqplib";
import { OrderEvent } from "../Events/order.event";
import { EventType } from "../Events/event.type";

@injectable()
export class OrderCreatedConsumer implements IConsumer {
  private readonly rmqtemp: RabbitMQTemplate;
  private readonly orderReducer: OrderReducer;

  public constructor(
    @inject(Identifiers.QUEUE) rmqtemp: RabbitMQTemplate,
    @inject(Identifiers.REDUCER) @named('orderReducer') orderReducer: OrderReducer,
  ) {
    this.rmqtemp = rmqtemp;
    this.orderReducer = orderReducer;
  }

  @postConstruct()
  initializeConsumer(): Promise<void> {
    return this.rmqtemp.registerListener({ name: 'order_created' }, this.onOrderCreated.bind(this));
  }

  onOrderCreated(message: ConsumeMessage): void {
    this.orderReducer.handleMessage(new OrderEvent(message, EventType.Created));
  }
}

