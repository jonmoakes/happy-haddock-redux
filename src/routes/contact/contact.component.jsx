import ContactForm from "../../components/contact-form/contact-form.component";
import ContactInfo from "./contact-info.component";

import { Container } from "../../styles/container/container.styles";
import { ContactDiv } from "./contact.styles";

const ContactPage = () => (
  <Container>
    <ContactDiv>
      <h1>Contact me</h1>
    </ContactDiv>

    <ContactDiv>
      <ContactInfo />
    </ContactDiv>
    <hr />
    <ContactDiv>
      <ContactForm />
    </ContactDiv>
    <hr />
  </Container>
);

export default ContactPage;
