type paramsCode = {
  status: number;
  message: string;
}

export default class HttpException extends Error {
  status: number;

  constructor({ status, message }: paramsCode) {
    super(message);
    this.status = status;
    this.message = message
  }
}