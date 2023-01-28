import { redirect } from '@sveltejs/kit';
import { AuthUserSession } from '../../../../classes/auth/authUser';
import { MyProjects } from '../../../../classes/github/MyProjects';

export const load = async ({ params, cookies }) => {
  let getProject = new MyProjects();
  const sessionid = cookies.get('session_id');

  const user = async () => {
    const userSession = new AuthUserSession();
    let user = await userSession.checkSession(sessionid || '');
    return user;
  }

  let userGet = await user();

  if( userGet.role != 1){
    throw redirect(302,"/")
  }

  return {
    currentProject: getProject.getProject(parseInt(params.projectId)),
    sessionKey: sessionid
  }
}
