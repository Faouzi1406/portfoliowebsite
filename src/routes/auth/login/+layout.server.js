import { redirect } from '@sveltejs/kit';
import { AuthUserSession } from '../../../classes/auth/authUser';
 
/** @type {import('./$types').LayoutServerLoad} */
export const load = async ({ cookies }) => {
  const sessionid = cookies.get('session_id');
  const userSession = new AuthUserSession(); 
  let user = await userSession.checkSession(sessionid || '');

  if(user.isValidated) throw redirect(302, '/adminpage');
}
