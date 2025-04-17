import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Protected from "./apputils/Protected";
import UnProtected from "./apputils/UnProtected";
import HomeMain from "./features/home/HomeMain";
import SignUp from "./features/signup/SignUp";
import Login from "./features/login/LoginMain";
import LenisProvider from "./lib/LenisProvider";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <LenisProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<UnProtected />}>
              <Route path="/" index element={<HomeMain />} />
              <Route path="/signup" index element={<SignUp />} />
              <Route path="/login" index element={<Login />} />
            </Route>

            <Route element={<Protected />}></Route>
          </Routes>
        </BrowserRouter>
      </LenisProvider>
    </QueryClientProvider>
  );
}

export default App;
