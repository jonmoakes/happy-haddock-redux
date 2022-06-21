import { Link } from "react-router-dom";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";

const CookiePolicy = () => (
  <Container>
    <Div>
      <h1>Cookie Policy</h1>
    </Div>
    <Div>
      <p>1: Introduction</p>
      <p>1.1: Our website uses cookies.</p>
      <p>
        1.2: By using our website and agreeing to this policy, you consent to
        our use of cookies in accordance with the terms of this policy.
      </p>
      <hr />
      <p>2: About cookies</p>
      <p>
        2.1: A cookie is a file containing an identifier (a string of letters
        and numbers) that is sent by a web server to a web browser and is stored
        by the browser. The identifier is then sent back to the server each time
        the browser requests a page from the server.
      </p>
      <p>
        2.2: Cookies may be either "persistent" cookies or "session" cookies: a
        persistent cookie will be stored by a web browser and will remain valid
        until its set expiry date, unless deleted by the user before the expiry
        date; a session cookie, on the other hand, will expire at the end of the
        user session, when the web browser is closed.
      </p>
      <p>
        2.3: Cookies do not typically contain any information that personally
        identifies a user, but personal information that we store about you may
        be linked to the information stored in and obtained from cookies.
      </p>
      <p>
        2.4: Cookies can be used by web servers to identify and track users as
        they navigate different pages on a website and identify users returning
        to a website.
      </p>
      <hr />
      <p>3: Our cookies</p>
      <p>3.1: We use both session and persistent cookies on our website.</p>
      <p>
        3.2: The names of the cookies that we use on our website, and the
        purposes for:
      </p>
      <hr />

      <p>4: Stripe Cookies:</p>
      <p>
        4.1: our payment processor stripe uses cookies on our site for fraud
        prevention.
      </p>
      <p>
        4.2:you can read their privacy policy{" "}
        <a href="https://stripe.com/en-gb/privacy">here</a>.
      </p>
      <hr />

      <p>5: Blocking cookies</p>
      <p>
        5.1: Most browsers allow you to refuse to accept cookies; for example:
        <br />
        (a) in Firefox, you can block all cookies by clicking "Tools",
        "Options", "Privacy", selecting "Use custom settings for history" from
        the drop-down menu, and unticking "Accept cookies from sites";
        <br />
        and (b) in Chrome, you can block all cookies by accessing the "Overflow
        Menu" ( The 3 vertical dots in the top right ), and clicking "Settings",
        "Privacy And Security" and "Cookies And Other Site Data", and then
        selecting "Block 3rd Party Cookies" or any of the other options.
      </p>
      <p>
        5.2: Please note that the above methods may change with different
        versions of the browsers. Please seek the help section of the respective
        browsers for more information. 5.3 Blocking all cookies will have a
        negative impact upon the usability of many websites.
      </p>
      <hr />
      <p>6: Deleting cookies</p>
      <p>
        6.1: You can delete cookies already stored on your computer; for
        example:
        <br />
        (a) in Internet Explorer, you must manually delete cookie files (you can
        find instructions for doing so{" "}
        <a href="http://windows.microsoft.com/en-gb/internet-explorer/delete-manage-cookies#ie=ie-11">
          here
        </a>{" "}
        )<br />
        (b) in Firefox, you can delete cookies by clicking "Tools", "Options"
        and "Privacy", then selecting "Use custom settings for history" from the
        drop-down menu, clicking "Show Cookies", and then clicking "Remove All
        Cookies";
        <br />
        and (c) in Chrome, you can delete all cookies by accessing the "Overflow
        Menu" ( The 3 vertical dots in the top right ), and clicking "Settings",
        "Privacy And Security", then "clear browsing data". then select "cookies
        and other site data" and then click "clear data".
      </p>
      <p>
        6.2: Please note that the above methods may change with different
        versions of the browsers. Please seek the help section of the respective
        browsers for more information.
      </p>
      <p>
        6.3: Deleting cookies will have a negative impact on the usability of
        many websites.
      </p>
      <hr />
      <p>7: Our details</p>
      <p>7.1: This website is owned and operated by Jonathan Oakes.</p>
      <p>
        7.2: You can contact us Using our website{" "}
        <Link to="/contact">contact form</Link>
      </p>
      <p>
        Return <Link to="/">home</Link>
      </p>
    </Div>
  </Container>
);

export default CookiePolicy;
