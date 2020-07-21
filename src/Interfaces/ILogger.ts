export interface ILogger {
  logListener(consumer: string, event: string): void;
  logMessage(message: string): void;
}