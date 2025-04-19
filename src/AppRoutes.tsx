import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import UnProtected from "./apputils/UnProtected";
import HomeMain from "./features/home/HomeMain";
import SignUp from "./features/signup/SignUp";
import Login from "./features/login/LoginMain";
import Protected from "./apputils/Protected";
import PageTransitionWrapper from "./apputils/PageTransitionWrapper";

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          index
          element={
            <PageTransitionWrapper>
              <HomeMain />
            </PageTransitionWrapper>
          }
        />
        <Route element={<UnProtected />}>
          <Route
            path="/signup"
            element={
              <PageTransitionWrapper>
                <SignUp />
              </PageTransitionWrapper>
            }
          />
          <Route
            path="/login"
            element={
              <PageTransitionWrapper>
                <Login />
              </PageTransitionWrapper>
            }
          />
        </Route>
        <Route element={<Protected />}>
          <Route path="/in" />  
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
