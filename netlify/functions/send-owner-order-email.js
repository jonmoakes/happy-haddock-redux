const client = require("@sendgrid/mail");

const sendOwnerOrderEmail = (client, message) => {
  return new Promise((resolve, reject) => {
    const data = {
      from: process.env.APP_OWNER_EMAIL,
      subject: "Happy Haddock - You Received A New Order!",
      to: process.env.APP_OWNER_EMAIL,
      text: message.ownerEmailToSend,
    };

    client
      .send(data)
      .then(([response, body]) => {
        resolve(response);
      })
      .catch((error) => reject(error));
  });
};

exports.handler = (event, context, callback) => {
  const body = JSON.parse(event.body);

  const message = body.message;

  client.setApiKey(process.env.SENDGRID_API_KEY);

  sendOwnerOrderEmail(client, message, process.env.APP_OWNER_EMAIL)
    .then((response) => callback(null, { statusCode: response.statusCode }))
    .catch((err) => callback(err, null));
};
