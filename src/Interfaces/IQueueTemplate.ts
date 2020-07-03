export default interface IQueueTemplate {
  registerListener(queueOptions: any, listener: Function): void;
}