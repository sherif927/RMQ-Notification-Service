import IConsumer from "../Interfaces/IConsumer";
import Identifiers from '../Constants/identifiers';
import { injectable, postConstruct, inject, named } from "inversify";
import { ConsumeMessage, Channel } from 'amqplib';
import { UserReducer } from "../Reducers/user.reducer";
import { RabbitMQTemplate } from "../RabbitMQ/rabbitmq.template";
import { UserEvent } from "../Events/user.event";
import { EventType } from "../Events/event.type";

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
    return this.rmqtemp.registerListener('user_created', this.onUserCreated.bind(this));
  }

  onUserCreated(message: ConsumeMessage): void {
    this.userReducer.handleMessage(new UserEvent(message, EventType.Created));
  }

}