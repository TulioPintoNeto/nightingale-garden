import { ServerError } from './ServerError';

export class BadRequestError extends ServerError {
  missingFields: string[];

  constructor(missingFields: string[]) {
    super();
    this.missingFields = missingFields;
  }

  get response(): Response {
    return new Response(
      `Missing the following fields in the request: ${this.missingFields.join(
        ','
      )}`,
      { status: 400 }
    );
  }
}
