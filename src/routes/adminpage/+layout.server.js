import { redirect } from '@sveltejs/kit';
import { AuthUserSession } from '../../classes/auth/authUser';
import { Github } from '../../classes/github/githubClass';
 
/** @type {import('./$types').LayoutServerLoad} */
export const load = async ({ cookies }) => {
  const getUser = async () => {
    const sessionid = cookies.get('session_id');
    const userSession = new AuthUserSession(); 
    let user = await userSession.checkSession(sessionid || '');
    if(!user.isValidated) throw redirect(302, '/auth/login');
  }

  getUser()


  if(!user.isValidated || user.role != 1) throw redirect(302, '/auth/login');

  //github Repo's 
  const getRepos = async () => {
    const github = new Github(); 
    const allRepos = await github.allPubRepos('Faouzi1406');
    return allRepos;
  }


  return {
    gitRepos:getRepos()
  };
}
