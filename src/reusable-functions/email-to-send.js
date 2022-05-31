export const emailToSend = (name, email, message) => {
  return `______________________________________________

REMINDER:
TO REPLY TO THE CUSTOMER BY EMAIL,
PLEASE CLICK ON THEIR EMAIL LINK BELOW.
DO NOT REPLY TO THIS VERY MESSAGE
AS THE CUSTOMER WILL NOT RECEIVE IT
______________________________________________

Name:
${name}

Email:
${email}

Message:
${message}
`;
};
