import { ValidationError } from "class-validator";
import BadRequestError from "./BadRequestError";

const BodyValidationError = class extends BadRequestError {
  constructor(public errors: ValidationError[]) {
    super();
  }

  serialize(): { message: string | object } {
    const values = this.errors.map((error) => {
      return { [error.property]: error.constraints };
    });
    return { message: values };
  }
};

export default BodyValidationError;
