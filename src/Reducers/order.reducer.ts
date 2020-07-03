import IReducer from "../Interfaces/IReducer";
import Identifiers from '../Constants/identifiers';
import { injectable, inject, named } from "inversify";
import { OrderEvent } from "../Events/order.event";
import { MailHelper } from "../Notifiers/MailNotifications/mail.helper";
import { FirebaseHelper } from "../Notifiers/PushNotifications/firebase.helper";
import { SmsHelper } from "../Notifiers/SmsNotifications/sms.helper";

@injectable()
export class OrderReducer implements IReducer<OrderEvent>{
  private readonly mailHelper: MailHelper;
  private readonly firebaseHelper: FirebaseHelper;
  private readonly smsHelper: SmsHelper;

  public constructor(
    @inject(Identifiers.HELPER) @named('mail') mailHelper: MailHelper,
    @inject(Identifiers.HELPER) @named('fcm') firebaseHelper: FirebaseHelper,
    @inject(Identifiers.HELPER) @named('sms') smsHelper: SmsHelper
  ) {
    this.mailHelper = mailHelper;
    this.firebaseHelper = firebaseHelper;
    this.smsHelper = smsHelper;
  }

  handleMessage(event: OrderEvent): void { }

}