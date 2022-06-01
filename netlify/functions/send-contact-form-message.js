const client = require("@sendgrid/mail");

const sendEmail = (client, emailToSend) => {
  return new Promise((resolve, reject) => {
    const data = {
      from: process.env.APP_OWNER_EMAIL,
      subject: "Message From Happy Haddock Contact Form",
      to: process.env.APP_OWNER_EMAIL,
      text: emailToSend,
    };

    client
      .send(data)
      .then(([response, body]) => {
        resolve(response);
      })
      .catch((error) => reject(error));
  });
};

exports.handler = async (event) => {
  const { SENDGRID_API_KEY, APP_OWNER_EMAIL } = process.env;

  try {
    const body = JSON.parse(event.body);
    const message = body.message;
    client.setApiKey(SENDGRID_API_KEY);
    await sendEmail(client, message, APP_OWNER_EMAIL);

    return {
      statusCode: 202,
    };
  } catch (error) {
    console.log({ error });

    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
};
