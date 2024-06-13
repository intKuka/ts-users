import CustomHttpError from "../utils/CustomHttpError";

const NotFoundError = class extends CustomHttpError {
  statusCode = 404;
  constructor(public message: string = "Not Found") {
    super(message);
  }
  serialize(): { message: string } {
    return { message: this.message };
  }
};

export default NotFoundError;
