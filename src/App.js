import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { GlobalStyle } from "./global-styles";

import useCheckUserSession from "./hooks/use-check-user-session";
import useCartItemsSnapshotListener from "./hooks/firestore/use-cart-items-snapshot-listener";
import useClearFinalItemContactMethodHideHamburger from "./hooks/use-clear-final-item-contact-method-hide-hamburger";

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
const Dashboard = lazy(() => import("./routes/dashboard/dashboard.component"));
const Menu = lazy(() => import("./routes/menu/menu.component"));
const IndividualProduct = lazy(() =>
  import("./routes/individual-product/individual-product.component")
);
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));
const Contact = lazy(() => import("./routes/contact/contact.component"));
const PrivacyPolicy = lazy(() =>
  import("./routes/privacy-policy/privacy-policy.component")
);
const CookiePolicy = lazy(() =>
  import("./routes/cookie-policy/cookie-policy.component")
);

const App = () => {
  const currentUser = useSelector(selectCurrentUser);

  useCheckUserSession();
  useCartItemsSnapshotListener();
  useClearFinalItemContactMethodHideHamburger();

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
                path="dashboard"
                element={
                  currentUser &&
                  currentUser.id === process.env.REACT_APP_APP_OWNER_ID ? (
                    <Dashboard />
                  ) : currentUser &&
                    currentUser.id !== process.env.REACT_APP_APP_OWNER_ID ? (
                    <Navigate replace to="/menu" />
                  ) : (
                    currentUser === null && <Navigate replace to="/sign-in" />
                  )
                }
              />
              <Route
                path="sign-in"
                element={
                  currentUser ? (
                    <Navigate replace to="/dashboard" />
                  ) : (
                    <SignIn />
                  )
                }
              />
              <Route
                path="sign-up"
                element={
                  currentUser ? <Navigate replace to="/menu" /> : <SignUp />
                }
              />

              <Route path="menu/*" element={currentUser && <Menu />} />
              <Route
                path="product/*"
                element={currentUser && <IndividualProduct />}
              />
              <Route path="contact" element={<Contact />} />
              <Route path="checkout" element={currentUser && <Checkout />} />
              <Route
                path="privacy-policy"
                element={currentUser && <PrivacyPolicy />}
              />
              <Route
                path="cookie-policy"
                element={currentUser && <CookiePolicy />}
              />
            </Route>
          </Routes>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
