const SERVICE_IDENTIFIER = {
  APPLICATION: Symbol.for("IApplication"),
  CONSUMER: Symbol.for("IConsumer"),
  HELPER: Symbol.for("IHelper"),
  CONFIG: Symbol.for("IConfig"),
  REDUCER: Symbol.for("IReducer"),
  QUEUE: Symbol.for("IQueueTemplate"),
  LOGGER: Symbol.for("ILogger")
};

export default SERVICE_IDENTIFIER;