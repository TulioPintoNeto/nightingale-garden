import { BadRequestError } from 'globals/api/errors/BadRequestError';
import { ContactPayload } from '../../data/contactEndpoint/types';

const isMissing = (payload: any) => (field: string) => {
  const isPresent = field in payload && typeof field === 'string'; 
  return !isPresent;
};

export const isPayloadValid = (payload: any): payload is ContactPayload => {
  const expectedFields = ['name', 'email', 'message'];
  const missingFields = expectedFields.filter(isMissing(payload));

  if (missingFields.length === 0) {
    return true;
  }

  throw new BadRequestError(missingFields);
};
