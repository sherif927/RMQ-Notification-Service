
import "reflect-metadata";

import { Container } from "inversify";
import Identifiers from '../Constants/identifiers';
import IApplication from "../Interfaces/IApplication";
import { Application } from "../app";
import IReducer from "../Interfaces/IReducer";
import { UserReducer } from "../Reducers/user.reducer";
import IConsumer from "../Interfaces/IConsumer";
import { UserCreatedConsumer } from "../Consumers/user.created.consumer";
import { OrderCreatedConsumer } from "../Consumers/order.created.consumer";
import { OrderUpdatedConsumer } from "../Consumers/order.updated.consumer";
import IHelper from "../Interfaces/IHelper";
import { MailHelper } from "../Notifiers/MailNotifications/mail.helper";
import { SmsHelper } from "../Notifiers/SmsNotifications/sms.helper";
import { FirebaseHelper } from "../Notifiers/PushNotifications/firebase.helper";
import IQueueTemplate from "../Interfaces/IQueueTemplate";
import { RabbitMQTemplate } from "../RabbitMQ/rabbitmq.template";
import { UserEvent } from "../Events/user.event";
import { OrderEvent } from "../Events/order.event";
import { OrderReducer } from "../Reducers/order.reducer";


let container = new Container();

// @example 
// container.bind<IType>(SERVICE_IDENTIFIER.TYPE_IDENTIFIER).to(TYPE).whenTargetNamed(TAG.TYPE);


container.bind<IApplication>(Identifiers.APPLICATION).to(Application);
container.bind<IReducer<UserEvent>>(Identifiers.REDUCER).to(UserReducer).whenTargetNamed("userReducer");
container.bind<IReducer<OrderEvent>>(Identifiers.REDUCER).to(OrderReducer).whenTargetNamed("orderReducer");
container.bind<IConsumer>(Identifiers.CONSUMER).to(UserCreatedConsumer).whenTargetNamed("userCreated");
container.bind<IConsumer>(Identifiers.CONSUMER).to(OrderCreatedConsumer).whenTargetNamed("orderCreated");
container.bind<IConsumer>(Identifiers.CONSUMER).to(OrderUpdatedConsumer).whenTargetNamed("orderUpdated");
container.bind<IHelper>(Identifiers.HELPER).to(MailHelper).whenTargetNamed("mail");
container.bind<IHelper>(Identifiers.HELPER).to(SmsHelper).whenTargetNamed("sms");
container.bind<IHelper>(Identifiers.HELPER).to(FirebaseHelper).whenTargetNamed("fcm");
container.bind<IQueueTemplate>(Identifiers.QUEUE).to(RabbitMQTemplate);



export default container;