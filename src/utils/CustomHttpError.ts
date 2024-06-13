abstract class CustomHttpError extends Error {
  abstract statusCode: number;

  constructor(public message: string) {
    super(message);
  }

  abstract serialize(): { message: string };
}

export default CustomHttpError;
