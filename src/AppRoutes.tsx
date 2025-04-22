import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import HomeMain from "./features/home/HomeMain";
import SignUp from "./features/signup/SignUp";
import Login from "./features/login/LoginMain";
import Protected from "./apputils/Protected";
import TermsAndConditions from "./features/terms-and-conditions/TermsAndConditions";
import PrivacyPolicy from "./features/privacy-policy/PrivacyPolicy";
import CookiePolicy from "./features/cookie-policy/CookiePolicy";
import ContactUs from "./features/contact-us/ContactUs";
import Faqs from "./features/faqs/Faqs";
import AboutUs from "./features/about-us/AboutUs";
import { useLayoutEffect } from "react";
import Pricing from "./features/pricing/Pricing";

function AppRoutes() {
  const location = useLocation();
  const { pathname } = location;

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" index element={<HomeMain />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<Faqs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/pricing" element={<Pricing />} />

        <Route element={<Protected />}>
          <Route path="/in" />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
