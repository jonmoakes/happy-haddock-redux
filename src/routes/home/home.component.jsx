import { Outlet } from "react-router-dom";
import Intro from "./intro.component";
import OrderOnlineInfo from "./order-online-info.component";
import SignInUpLinks from "./sign-in-up-links.component";
import OpeningHours from "./opening-hours.component";

import { Container } from "../../styles/container/container.styles";

const Home = () => (
  <Container>
    <Intro />
    <OrderOnlineInfo />
    <SignInUpLinks />
    <OpeningHours />
    <Outlet />
  </Container>
);

export default Home;
