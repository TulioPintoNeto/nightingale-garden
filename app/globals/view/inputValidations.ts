import * as EmailValidator from 'email-validator';

type InputValidations = { [key: string]: (v: string) => boolean };

const minLength = (v: string) => v.length > 3;
const email = EmailValidator.validate;

export const inputValidations: InputValidations = { minLength, email };
