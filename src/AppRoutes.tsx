import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import UnProtected from "./apputils/UnProtected";
import HomeMain from "./features/home/HomeMain";
import SignUp from "./features/signup/SignUp";
import Login from "./features/login/LoginMain";
import Protected from "./apputils/Protected";

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<UnProtected />}>
          <Route path="/" index element={<HomeMain />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<Protected />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
