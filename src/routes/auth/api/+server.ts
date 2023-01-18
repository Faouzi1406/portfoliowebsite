import { AuthGetUser, AuthUserCreation, AuthUserSession } from '../../../classes/auth/authUser';
import type { AuthCreateUser, AuthGet, AuthUserFound, AuthUserOk, AuthUserSessionOk } from '../../../types/AuthResponses';
import * as cookie from 'cookie';

export const POST   = async (event:any) => {  
  const userInfo = await event.request.formData();
  const userName = userInfo.get('username');
  const passWord = userInfo.get('password');

  const getUserClass  = new AuthGetUser(userName);
  const getUserInfo = await getUserClass.loginUser(passWord);

  if(getUserInfo.isOk){
  return new Response(
    JSON.stringify({
      sessionCreated: true
    }),
    {
      headers: {
        'location':'/adminpage',
        'Set-Cookie': cookie.serialize('session_id', getUserInfo.session.token || '', {
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 7,
          sameSite: 'strict',
          path: '/'
        },),
      },
      status: 302
    }
  )
  }
  else{
    return new Response(
      JSON.stringify({
        sessionCreated: false
      }),
      {
      headers: {
        'location': '/auth/login',
      },
      status: 302
      })
  }
}

export const PUT  = async (event:any) => {
  const userInfo  = await event.request.formData();
  const userForm:AuthCreateUser = {
    username: userInfo.get('username'),
    password: userInfo.get('password'),
    email:    userInfo.get('email'),
    role:     0     
  };
  
  const createUser = new AuthUserCreation(userForm);
  const created:AuthUserOk = await createUser.createUser();
  
  return new Response(
    JSON.stringify({
      createdUser:  created.isCreated,
      username:     created.user.username
    }),
    {
      headers:  {
        'Content-Type':   'application/json'
    }
    }
  );
} 
