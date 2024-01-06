import { server } from 'data/server';
import { ContactPayload } from './types';

export const contactEndpoint = async (payload: ContactPayload) => {
  await server.post('/api/contact', payload);
};
