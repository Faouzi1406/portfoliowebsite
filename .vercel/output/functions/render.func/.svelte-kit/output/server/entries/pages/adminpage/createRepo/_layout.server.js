import { r as redirect } from "../../../../chunks/index.js";
import { A as AuthUserSession } from "../../../../chunks/authUser.js";
const load = async ({ cookies }) => {
  const sessionid = cookies.get("session_id");
  const userSession = new AuthUserSession();
  const user = await userSession.checkSession(sessionid || "");
  if (!user.isValidated || user.role != 1)
    throw redirect(302, "/");
  return {
    sessionKey: sessionid
  };
};
export {
  load
};
