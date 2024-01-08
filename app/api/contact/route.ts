import { ServerError } from 'globals/api/errors/ServerError';
import { sendEmail } from './sendEmail';
import { isPayloadValid } from './isPayloadValid';
import { captureException } from '@sentry/nextjs';

export const POST = async (request: Request) => {
  try {
    const payload = await request.json();

    if (isPayloadValid(payload)) {
      const { name, email, message } = payload;

      await sendEmail({
        subject: `Website - Message from ${name} (${email})`,
        message,
      });
    }

    return new Response(null, { status: 204 });
  } catch (e) {
    captureException(e);

    if (e instanceof ServerError) {
      return e.response;
    }

    return new Response(e.toString(), {
      status: 500,
    });
  }
};
