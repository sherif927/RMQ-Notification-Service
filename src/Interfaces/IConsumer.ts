export default interface IConsumer {
  initializeConsumer(): Promise<void>;
}