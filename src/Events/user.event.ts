import { ConsumeMessage } from "amqplib";
import { EventType } from "./event.type";

export class UserEvent {
  constructor(message: ConsumeMessage) { }
  type: EventType;
}