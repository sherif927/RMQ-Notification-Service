import { ConsumeMessage } from "amqplib";
import { EventType } from "./event.type";

export class ProductEvent {
  constructor(message: ConsumeMessage) { }
  type: EventType;
}
