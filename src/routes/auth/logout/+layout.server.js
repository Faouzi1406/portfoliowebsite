import { redirect } from '@sveltejs/kit';
import { AuthUserSession } from '../../../classes/auth/authUser';
 
/** @type {import('./$types').LayoutServerLoad} */
export const load = async ({ cookies }) => {
  const sessionid = cookies.get('session_id');
  console.log(sessionid)

  return {
    logout:"succes"
  }
}
