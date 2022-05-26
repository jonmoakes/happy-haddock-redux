import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { GlobalStyle } from "./global-styles";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./utils/firebase/firebase.utils";

import { checkUserSession } from "./store/user/user.action";
import { updateCartItems } from "./store/cart/cart.action";
import { selectCurrentUser } from "./store/user/user.selector";
import { clearFinalItem } from "./store/final-item/final-item.action";

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
const FullMenu = lazy(() => import("./routes/full-menu/full-menu.component"));
const IndividualProduct = lazy(() =>
  import("./routes/individual-product/individual-product.component")
);
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));
// const Contact = lazy(() => import("./routes/contact/contact.component"));

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  useEffect(() => {
    if (!currentUser) return;
    let unsubscribeFromSnapshot = null;

    try {
      unsubscribeFromSnapshot = onSnapshot(
        doc(db, "users", currentUser.id),
        (doc) => {
          const { cartItems } = doc.data();
          dispatch(updateCartItems(cartItems));
        }
      );
    } catch (error) {
      console.log(error);
    }

    return () => {
      unsubscribeFromSnapshot();
    };
  }, [currentUser, dispatch]);

  useEffect(() => {
    return () => {
      if (location.pathname.includes("product")) {
        dispatch(clearFinalItem());
      }
    };
  });

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
                element={
                  !currentUser ? <SignIn /> : <Navigate replace to="/menu" />
                }
              />
              <Route
                path="sign-up"
                element={
                  !currentUser ? <SignUp /> : <Navigate replace to="/menu" />
                }
              />
              <Route path="menu/*" element={currentUser && <Menu />} />
              <Route path="full-menu" element={currentUser && <FullMenu />} />
              <Route
                path="product/*"
                element={currentUser && <IndividualProduct />}
              />
              {/* <Route path="contact" element={<Contact />} /> */}
              <Route path="checkout" element={currentUser && <Checkout />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default App;
