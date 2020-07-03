import { ConsumeMessage } from "amqplib";
import { EventType } from "./event.type";

export abstract class BaseEvent {
  protected type: EventType;
  constructor(message: ConsumeMessage, type: EventType) { }
}