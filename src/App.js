import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { GlobalStyle } from "./global-styles";

import { checkUserSession } from "./store/user/user.action";
import { selectCurrentUser } from "./store/user/user.selector";

import ScrollToTopAuto from "./components/scroll-to-top-auto/scroll-to-top-auto.component";
import ErrorFallback from "./components/error-fallback/error-fallback.component";
import Loader from "./components/loader/loader.component";
import Footer from "./components/footer/footer.component";

const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.component"));
const SignIn = lazy(() => import("./routes/sign-in/sign-in.component"));
const SignUp = lazy(() => import("./routes/sign-up/sign-up.component"));
const Menu = lazy(() => import("./routes/menu/menu.component"));
const IndividualProduct = lazy(() =>
  import("./routes/individual-product/individual-product.component")
);
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));
// const Contact = lazy(() => import("./routes/contact/contact.component"));

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <ScrollToTopAuto />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route
                path="sign-in"
                element={!user ? <SignIn /> : <Navigate replace to="/menu" />}
              />
              <Route
                path="sign-up"
                element={!user ? <SignUp /> : <Navigate replace to="/menu" />}
              />
              <Route path="menu/*" element={user && <Menu />} />
              <Route path="product/*" element={user && <IndividualProduct />} />
              {/* <Route path="contact" element={<Contact />} /> */}
              <Route path="checkout" element={user && <Checkout />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default App;
