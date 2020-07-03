import IApplication from "./Interfaces/IApplication";
import Identifiers from './Constants/identifiers';
import { injectable, inject, named, postConstruct } from "inversify";
import { UserCreatedConsumer } from "./Consumers/user.created.consumer";
import { OrderUpdatedConsumer } from "./Consumers/order.updated.consumer";
import { OrderCreatedConsumer } from "./Consumers/order.created.consumer";

@injectable()
export class Application implements IApplication {

  private readonly userCreatedConsumer: UserCreatedConsumer;
  private readonly orderCreatedConsumer: OrderCreatedConsumer;
  private readonly orderUpdatedConsumer: OrderUpdatedConsumer;


  public constructor(
    @inject(Identifiers.CONSUMER) @named('userCreated') userCreatedConsumer: UserCreatedConsumer,
    @inject(Identifiers.CONSUMER) @named('orderCreated') orderCreatedConsumer: OrderCreatedConsumer,
    @inject(Identifiers.CONSUMER) @named('orderUpdated') orderUpdatedConsumer: OrderUpdatedConsumer
  ) {
    this.userCreatedConsumer = userCreatedConsumer;
    this.orderCreatedConsumer = orderCreatedConsumer;
    this.orderUpdatedConsumer = orderUpdatedConsumer;
  }


  /**
   * method responsible for bootstrapping
   * the whole application. typically called
   * after construction.
   *
   * @memberof Application
   */
  @postConstruct()
  async initializeApplication(): Promise<void> {

  }


}