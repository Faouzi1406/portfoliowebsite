import { r as redirect } from "../../../../../chunks/index.js";
import { A as AuthUserSession } from "../../../../../chunks/authUser.js";
import { M as MyProjects } from "../../../../../chunks/MyProjects.js";
const load = async ({ params, cookies }) => {
  let getProject = new MyProjects();
  const sessionid = cookies.get("session_id");
  const user = async () => {
    const userSession = new AuthUserSession();
    let user2 = await userSession.checkSession(sessionid || "");
    return user2;
  };
  let userGet = await user();
  if (userGet.role != 1) {
    throw redirect(302, "/");
  }
  return {
    currentProject: getProject.getProject(parseInt(params.projectId)),
    sessionKey: sessionid
  };
};
export {
  load
};
