import IReducer from "../Interfaces/IReducer";
import Identifiers from '../Constants/identifiers';
import { injectable, inject, named } from "inversify";
import { OrderEvent } from "../Events/order.event";
import { EventType } from "../Events/event.type";
import IHelper from "../Interfaces/IHelper";

@injectable()
export class OrderReducer implements IReducer<OrderEvent>{
  private readonly mailHelper: IHelper;
  private readonly firebaseHelper: IHelper;
  private readonly smsHelper: IHelper;

  public constructor(
    @inject(Identifiers.HELPER) @named('mail') mailHelper: IHelper,
    @inject(Identifiers.HELPER) @named('fcm') firebaseHelper: IHelper,
    @inject(Identifiers.HELPER) @named('sms') smsHelper: IHelper
  ) {
    this.mailHelper = mailHelper;
    this.firebaseHelper = firebaseHelper;
    this.smsHelper = smsHelper;
  }

  handleMessage(event: OrderEvent): void {
    switch (event.type) {
      case EventType.Created: break;
      case EventType.Updated: break;
      case EventType.Deleted: break;
      default: break;
    }
  }

}