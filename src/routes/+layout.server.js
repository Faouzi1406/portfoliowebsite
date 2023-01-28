import { redirect } from '@sveltejs/kit';
import { AuthUserSession } from '../classes/auth/authUser';
import { MyProjects } from '../classes/github/MyProjects';
 
/** @type {import('./$types').LayoutServerLoad} */
export const load = async ({ cookies }) => {
  const user = async () => {
    const sessionid = cookies.get('session_id');
    const userSession = new AuthUserSession(); 
    let user = await userSession.checkSession(sessionid || '');
    return user;
  }

  const getProject = new MyProjects();
  return {
    user:user(),
    projects:Promise.resolve(getProject.getAll())
  }
}
