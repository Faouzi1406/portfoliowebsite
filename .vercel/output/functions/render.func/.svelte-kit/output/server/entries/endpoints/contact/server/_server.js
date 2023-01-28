import sendMail from "sib-api-v3-sdk";
const SECRET_MAIL_KEY = "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";
const POST = async (event) => {
  const contact = await event.request.json();
  const contactForm = {
    email: contact.email,
    naam: contact.naam,
    bericht: contact.bericht
  };
  const emailClient = sendMail.ApiClient.instance;
  const apiKey = emailClient.authentications["api-key"];
  apiKey.apiKey = SECRET_MAIL_KEY;
  const emailApi = new sendMail.TransactionalEmailsApi();
  const send = {
    email: "fbouchakhch@gmail.com",
    name: "Portfolio-contact"
  };
  const receivers = [
    {
      email: "faouzib1@outlook.com"
    }
  ];
  let isOk = true;
  emailApi.sendTransacEmail({
    sender: send,
    to: receivers,
    subject: "wowwwiee",
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
      role: "Wowwwww"
    }
  }).catch(
    (e) => {
      console.log(e);
      isOk = false;
    }
  );
  return new Response(
    JSON.stringify(
      {
        data: isOk
      }
    )
  );
};
export {
  POST
};
