
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Signup from "./pages/Signup";
import OTPVerification from "./pages/OTPVerification";
import CreatePassword from "./pages/CreatePassword";
import WelcomeBack from "./pages/WelcomeBack";
import PaymentSucceeded from "./pages/PaymentSucceeded";
import UnderReview from "./pages/UnderReview";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import HelpSupport from "./pages/HelpSupport";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/otp-verification" element={<OTPVerification />} />
          <Route path="/create-password" element={<CreatePassword />} />
          <Route path="/welcome-back" element={<WelcomeBack />} />
          <Route path="/payment-succeeded" element={<PaymentSucceeded />} />
          <Route path="/under-review" element={<UnderReview />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/help-support" element={<HelpSupport />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
