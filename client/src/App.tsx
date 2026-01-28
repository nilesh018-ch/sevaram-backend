import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { StoreProvider } from "@/context/StoreContext"; // Import StoreProvider
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ServiceDetail from "@/pages/ServiceDetail";
import CategoryDetail from "@/pages/CategoryDetail";
import Inquiry from "@/pages/Inquiry";
import AdminLogin from "@/pages/AdminLogin"; // Import AdminLogin
import AdminDashboard from "@/pages/AdminDashboard"; // Import AdminDashboard
import './i18n/config';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/service/:id" component={ServiceDetail} />
      <Route path="/category/:id" component={CategoryDetail} />
      <Route path="/inquiry" component={Inquiry} />
      <Route path="/admin" component={AdminLogin} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider> {/* Wrap with StoreProvider */}
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </StoreProvider>
    </QueryClientProvider>
  );
}

export default App;
