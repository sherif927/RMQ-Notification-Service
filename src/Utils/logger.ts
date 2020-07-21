import { ILogger } from "../Interfaces/ILogger";
import colors from 'colors';

export class Logger implements ILogger {

  logListener(consumer: string, event: string): void {
    console.log(
      colors.yellow(`[${consumer}] initialized with listener to event [${event}]`)
    );
  }

  logMessage(message: string): void {
    console.log(
      colors.cyan(message)
    );
  }
}