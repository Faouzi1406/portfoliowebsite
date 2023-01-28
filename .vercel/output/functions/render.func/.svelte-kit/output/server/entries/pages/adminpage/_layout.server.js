import { r as redirect } from "../../../chunks/index.js";
import { A as AuthUserSession } from "../../../chunks/authUser.js";
import { M as MyProjects } from "../../../chunks/MyProjects.js";
const load = async ({ cookies }) => {
  const sessionid = cookies.get("session_id");
  const userSession = new AuthUserSession();
  const user = await userSession.checkSession(sessionid || "");
  let projects = new MyProjects();
  let allProjects = await projects.getAll();
  if (!user.isValidated || user.role != 1)
    throw redirect(302, "/");
  return {
    projects: allProjects
  };
};
export {
  load
};
