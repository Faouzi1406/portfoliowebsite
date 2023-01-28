import { a as AuthGetUser, b as AuthUserCreation } from "../../../../chunks/authUser.js";
import * as cookie from "cookie";
const POST = async (event) => {
  const userInfo = await event.request.formData();
  const userName = userInfo.get("username");
  const passWord = userInfo.get("password");
  const getUserClass = new AuthGetUser(userName);
  const getUserInfo = await getUserClass.loginUser(passWord);
  if (getUserInfo.isOk) {
    return new Response(
      JSON.stringify({
        sessionCreated: true
      }),
      {
        headers: {
          "location": "/adminpage",
          "Set-Cookie": cookie.serialize("session_id", getUserInfo.session.token || "", {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7,
            sameSite: "strict",
            path: "/"
          })
        },
        status: 302
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        sessionCreated: false
      }),
      {
        headers: {
          "location": "/auth/login"
        },
        status: 302
      }
    );
  }
};
const PUT = async (event) => {
  const userInfo = await event.request.formData();
  const userForm = {
    username: userInfo.get("username"),
    password: userInfo.get("password"),
    email: userInfo.get("email"),
    role: 1
  };
  const createUser = new AuthUserCreation(userForm);
  const created = await createUser.createUser();
  return new Response(
    JSON.stringify({
      createdUser: created.isCreated,
      username: created.user.username
    }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
export {
  POST,
  PUT
};
