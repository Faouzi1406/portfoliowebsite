import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export const load = async ({ cookies }) => {
  const sessionid = cookies.delete('session_id', {path:'/'});

   throw redirect(307, '/');
}
