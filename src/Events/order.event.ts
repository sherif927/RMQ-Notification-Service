import { ConsumeMessage } from "amqplib";
import { EventType } from "./event.type";

export class OrderEvent {
  constructor(message: ConsumeMessage) { }
  type: EventType;
}
