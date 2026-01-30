import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot, type Root } from "react-dom/client";
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

declare global {
  interface Window {
    __REACT_APP_ROOT__?: Root;
    // Legacy keys from earlier iterations (kept only to prevent duplicate root creation)
    __APP_ROOT__?: Root;
    __vite_react_root?: Root;
    __reactRoot?: Root;
  }
}

const rootElement = document.getElementById("root");

if (rootElement) {
  const w = window;

  const hotDataRoot = import.meta.hot?.data?.root as Root | undefined;
  const existingRoot =
    hotDataRoot ||
    w.__REACT_APP_ROOT__ ||
    w.__APP_ROOT__ ||
    w.__vite_react_root ||
    w.__reactRoot;

  const root = existingRoot ?? createRoot(rootElement);

  // Persist for future HMR updates
  w.__REACT_APP_ROOT__ = root;
  if (import.meta.hot) {
    import.meta.hot.data.root = root;
    import.meta.hot.accept();
  }

  root.render(<App />);
}
