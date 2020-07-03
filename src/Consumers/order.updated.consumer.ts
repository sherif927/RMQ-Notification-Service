import { injectable, inject, named, postConstruct } from "inversify";
import IConsumer from "../Interfaces/IConsumer";
import Identifiers from '../Constants/identifiers';
import { RabbitMQTemplate } from "../RabbitMQ/rabbitmq.template";
import { OrderReducer } from "../Reducers/order.reducer";
import { ConsumeMessage } from "amqplib";

@injectable()
export class OrderUpdatedConsumer implements IConsumer {
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
    return this.rmqtemp.registerListener({ name: 'order_updated' }, this.onOrderUpdated.bind(this));
  }

  onOrderUpdated(message: ConsumeMessage): void {
    //TODO map message to eventObj then, pass to reducer
    //@example this.userReducer.handleMessage(new Event(message));
  }
}





