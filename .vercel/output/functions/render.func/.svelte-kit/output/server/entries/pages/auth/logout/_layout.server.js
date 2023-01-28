import { r as redirect } from "../../../../chunks/index.js";
const load = async ({ cookies }) => {
  cookies.delete("session_id", { path: "/" });
  throw redirect(307, "/");
};
export {
  load
};
