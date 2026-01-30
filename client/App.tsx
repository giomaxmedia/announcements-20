import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Register service worker for PWA support
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch((error) => {
        console.log("Service Worker registration failed:", error);
      });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

const rootElement = document.getElementById("root");

if (rootElement) {
  const w = window as any;

  if (!w.__REACT_ROOT_INITIALIZED__) {
    const root = createRoot(rootElement);
    w.__REACT_ROOT_INITIALIZED__ = true;
    w.__REACT_ROOT__ = root;
  }

  const root = w.__REACT_ROOT__;
  if (root) {
    root.render(<App />);
  }

  if (import.meta.hot) {
    import.meta.hot.accept(() => {
      const currentRoot = w.__REACT_ROOT__;
      if (currentRoot) {
        currentRoot.render(<App />);
      }
    });
  }
}
