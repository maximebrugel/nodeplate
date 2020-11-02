import { ApplicationException } from "./application.exception";

/**
 * Exception when one of the request parameters is invalid
 */
export class InvalidParameterException extends ApplicationException {
  /**
   * Exception constructor
   * @param context Request context and more details
   */
  constructor(context: string) {
    super(
      "InvalidParameterException",
      400,
      `Bad Request : Invalid parameter value in the request ${context}`
    );
  }
}
