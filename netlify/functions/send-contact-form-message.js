const client = require("@sendgrid/mail");

function sendEmail(client, emailToSend) {
  return new Promise((fulfill, reject) => {
    const data = {
      from: process.env.APP_OWNER_EMAIL,
      subject: "Message From Happy Haddock Contact Form",
      to: process.env.APP_OWNER_EMAIL,
      text: emailToSend,
    };

    client
      .send(data)
      .then(([response, body]) => {
        fulfill(response);
      })
      .catch((error) => reject(error));
  });
}

exports.handler = function (event, context, callback) {
  const { SENDGRID_API_KEY, APP_OWNER_EMAIL } = process.env;

  const body = JSON.parse(event.body);
  const message = body.message;

  client.setApiKey(SENDGRID_API_KEY);

  sendEmail(client, message, APP_OWNER_EMAIL)
    .then((response) => callback(null, { statusCode: response.statusCode }))
    .catch((err) => callback(err, null));
};
