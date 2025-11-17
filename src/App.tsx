import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import FormsOfAI from "./pages/insights/FormsOfAI";
import AIBubble from "./pages/insights/AIBubble";
import AgenticAI from "./pages/insights/AgenticAI";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/insights/forms-of-ai" element={<FormsOfAI />} />
          <Route path="/insights/ai-bubble" element={<AIBubble />} />
          <Route path="/insights/agentic-ai" element={<AgenticAI />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
