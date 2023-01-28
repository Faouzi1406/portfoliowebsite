import { A as AuthUserSession } from "../../chunks/authUser.js";
import { M as MyProjects } from "../../chunks/MyProjects.js";
const load = async ({ cookies }) => {
  const user = async () => {
    const sessionid = cookies.get("session_id");
    const userSession = new AuthUserSession();
    let user2 = await userSession.checkSession(sessionid || "");
    return user2;
  };
  const getProject = new MyProjects();
  return {
    user: user(),
    projects: Promise.resolve(getProject.getAll())
  };
};
export {
  load
};
