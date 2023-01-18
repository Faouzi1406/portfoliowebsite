import { redirect } from '@sveltejs/kit';
import { AuthUserSession } from '../../classes/auth/authUser';
import { Github } from '../../classes/github/githubClass';
 
/** @type {import('./$types').LayoutServerLoad} */
export const load = async ({ cookies }) => {
  const sessionid = cookies.get('session_id');
  const userSession = new AuthUserSession(); 
  let user = await userSession.checkSession(sessionid || '');

  //github Repo's 
  const github = new Github(); 
  const allRepos = await github.allPubRepos('Faouzi1406');

  if(!user.isValidated) throw redirect(302, '/auth/login');

  return {
    user:user,
    gitRepos:allRepos
  };
}
