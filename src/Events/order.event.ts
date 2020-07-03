import { ConsumeMessage } from "amqplib";
import { EventType } from "./event.type";
import { BaseEvent } from "./base.event";

export class OrderEvent extends BaseEvent {
  constructor(message: ConsumeMessage, type: EventType) {
    super(message, type);
  }
}
