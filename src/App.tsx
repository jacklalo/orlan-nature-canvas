import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import Index from "./pages/Index";
import Biography from "./pages/Biography";
import Sculptures from "./pages/Sculptures";
import Collection from "./pages/Collection";
import WorkDetail from "./pages/WorkDetail";
import Concept from "./pages/Concept";
import Exhibition from "./pages/Exhibition";
import IndexFilter from "./pages/IndexFilter";
import Editorial from "./pages/Editorial";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/sculptures" element={<Sculptures />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/work-detail" element={<WorkDetail />} />
            <Route path="/concept" element={<Concept />} />
            <Route path="/exhibition" element={<Exhibition />} />
            <Route path="/index-filter" element={<IndexFilter />} />
            <Route path="/editorial" element={<Editorial />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
