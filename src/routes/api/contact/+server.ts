import { createContactMessage } from '$lib/db/crud';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const body = await request.json();

    const { email, name, message } = body;

    // Basic validation
    if (
      typeof name !== 'string' || name.trim() === '' ||
      typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email) ||
      typeof message !== 'string' || message.trim() === ''
    ) {
      return new Response(JSON.stringify({ error: 'Invalid input' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Save the message
    const saved = await createContactMessage(name.trim(), email.trim(), message.trim());

    return new Response(JSON.stringify({ success: true, message: saved }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Failed to handle contact POST request:', error);

    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};