const EmailLabel = ({ contactMethod }) => (
  <>
    {contactMethod === "email" ? (
      <label>Email:</label>
    ) : (
      contactMethod === "phone" && (
        <label>
          Email: <span>( For your receipt )</span>
        </label>
      )
    )}
  </>
);

export default EmailLabel;
