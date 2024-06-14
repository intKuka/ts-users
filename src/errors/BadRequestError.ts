import CustomHttpError from "../utils/CustomHttpError";

const BadRequestError = class extends CustomHttpError {
  statusCode = 400;
  constructor(public message: string = "Bad Request") {
    super(message);
  }
  serialize(): { message: string | object } {
    return { message: this.message };
  }
};

export default BadRequestError;
