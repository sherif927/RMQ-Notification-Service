import IConsumer from "../Interfaces/IConsumer";
import Identifiers from '../Constants/identifiers';
import { injectable, postConstruct, inject, named } from "inversify";
import { ConsumeMessage, Channel } from 'amqplib';
import { UserReducer } from "../Reducers/user.reducer";
import { RabbitMQTemplate } from "../RabbitMQ/rabbitmq.template";

@injectable()
export class UserCreatedConsumer implements IConsumer {
  private readonly rmqtemp: RabbitMQTemplate;
  private readonly userReducer: UserReducer;

  public constructor(
    @inject(Identifiers.QUEUE) rmqtemp: RabbitMQTemplate,
    @inject(Identifiers.REDUCER) @named('userReducer') userReducer: UserReducer,
  ) {
    this.rmqtemp = rmqtemp;
    this.userReducer = userReducer;
  }

  @postConstruct()
  initializeConsumer(): Promise<void> {
    return this.rmqtemp.registerListener({ name: 'user_created' }, this.onUserCreated.bind(this));
  }

  onUserCreated(message: ConsumeMessage): void {
    //TODO map message to eventObj then, pass to reducer
    //@example this.userReducer.handleMessage(new Event(message));
  }

}