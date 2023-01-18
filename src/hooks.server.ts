import type { Handle } from '@sveltejs/kit';

export const handle: Handle  = async ({ event, resolve }) => {
  console.time('Handle')
  const response = await resolve(event);
  console.timeEnd('Handle')
  return response;
}
