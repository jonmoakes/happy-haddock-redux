import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { GlobalStyle } from "./global-styles";

import ErrorFallback from "./components/error-fallback/error-fallback.component";

import Loader from "./components/loader/loader.component";
import Footer from "./components/footer/footer.component";

const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.component"));
const SignIn = lazy(() => import("./routes/sign-in/sign-in.component"));
const SignUp = lazy(() => import("./routes/sign-up/sign-up.component"));

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="sign-in" element={<SignIn />} />
              <Route path="sign-up" element={<SignUp />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default App;
