/** @type {import('./$types').PageLoad} */
export const load =  async ({  }) => {
  let authKey = page.cookies.get('session_id');
  let body = JSON.stringify({ 'token':authKey });

  let isLoggedIn = await fetch('http://localhost:5173/auth/api', {
    method:'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body,
  });

  let isLoggedInJson = await isLoggedIn.json();

  if(isLoggedIn.ok && isLoggedInJson.isValidated){
    return {
      loggedIn: isLoggedInJson.isValidated,
      userName: isLoggedInJson.username
    };
  }
  else{
    return {
      loggedIn: false
    }
  }
}
