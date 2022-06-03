import { Link } from "react-router-dom";

const DemoInfo = () => {
  return (
    <>
      <p>please note that this is a demonstration app.</p>
      <p>please do not use a real card!</p>
      <p>full details will be shown before the payment option appears :)</p>
      <p>
        you can view the{" "}
        <a href="https://stripe.com/docs/testing">stripe documentation</a> and
        scroll down to "basic test card numbers" for more information.
      </p>
      <p>You will receive an "order summary" of your demonstration order.</p>
      <p>
        a live app would also email a customer a full stripe receipt for their
        records.
      </p>
      <p>
        please, <Link to="/contact">contact me</Link> with any questions. :)
      </p>
    </>
  );
};

export default DemoInfo;
