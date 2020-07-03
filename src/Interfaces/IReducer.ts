export default interface IReducer<T> {
  handleMessage(event: T): void;
}