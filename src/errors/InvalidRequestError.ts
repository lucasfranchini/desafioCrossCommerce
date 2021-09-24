export default class InvalidRequestError extends Error {
  constructor() {
    super("Cannot get arrays for this request");

    this.name = "InvalidRequestError";
  }
}
