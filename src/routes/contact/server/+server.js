import { SECRET_MAIL_KEY } from '$env/static/private'
import sendMail from  'sib-api-v3-sdk';

export const POST  = async (event) => {
  const contact  = await event.request.json();

  const contactForm = {
    email:contact.email,
    naam:contact.naam,
    bericht:contact.bericht
  };

  const emailClient = sendMail.ApiClient.instance;
  const apiKey = emailClient.authentications['api-key'];
  apiKey.apiKey = SECRET_MAIL_KEY;
  const emailApi = new sendMail.TransactionalEmailsApi();

  const send = {
    email: 'fbouchakhch@gmail.com',
    name:'Portfolio-contact'
  }
  
  const receivers = [
    {
      email:'faouzib1@outlook.com',
    },
  ];

  let isOk = true;

  const sendEmail =emailApi
    .sendTransacEmail({
        sender:send,
        to: receivers,
        subject: 'wowwwiee',
        textContent: `
          wow
        `,
        htmlContent: `
          <h1>Porfolio contact formulier</h1>: 
          <p>naam: ${contactForm.naam}</p>
          <p>emai: ${contactForm.email}</p>
          <p>bericht: ${contactForm.bericht}</p>
                `,
        params: {
            role: 'Wowwwww',
        },
    }).catch( e => {isOk=false}
  );

  return new Response( 
      JSON.stringify(
      {
        data:isOk
      }
      )
  );
} 
