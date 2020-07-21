import { Logger } from "./Logger";

/**
 * the logging decorator responsible
 * for logging the consumers and the 
 * events they're subscribing to.
 *
 * @export
 * @returns Decorator Factory
 */
export function log() {
  return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    let logger = new Logger();
    logger.logListener(target.constructor.name, propertyKey);
  }
}