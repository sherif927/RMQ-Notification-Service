import { ConsumeMessage } from "amqplib";
import { EventType } from "./event.type";
import { BaseEvent } from "./base.event";

export class ProductEvent extends BaseEvent {
  constructor(message: ConsumeMessage, type: EventType) {
    super(message, type);
  }
}
