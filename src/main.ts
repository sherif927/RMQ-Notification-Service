import { bootstrapRMQ } from "./RabbitMQ/rabbitmq.config";
import Identifiers from './Constants/identifiers';
import container from "./DI/ioc.config";
import { Application } from "./app";
import IApplication from "./Interfaces/IApplication";

function main(): void {
  bootstrapRMQ().then(() => {
    let app = container.get<IApplication>(Identifiers.APPLICATION);
  });
}

main();
