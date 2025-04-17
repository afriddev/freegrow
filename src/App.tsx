import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import LenisProvider from "./lib/LenisProvider";
import AppRoutes from "./AppRoutes";
import { Toaster } from "./components/ui/toaster";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <LenisProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </LenisProvider>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
