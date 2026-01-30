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

const rootElement = document.getElementById("root")!;
const w = window as any;

function initializeRoot() {
  // Check if root was already created
  if (w.__vite_react_root) {
    w.__vite_react_root.render(<App />);
    return;
  }

  // Check if the container already has React mounted (from a previous load)
  const existingReactRoot = (rootElement as any)._reactRootContainer;
  if (existingReactRoot) {
    w.__vite_react_root = existingReactRoot;
    w.__vite_react_root.render(<App />);
    return;
  }

  // Create new root only if absolutely necessary
  w.__vite_react_root = createRoot(rootElement);
  w.__vite_react_root.render(<App />);
}

initializeRoot();

// Handle HMR
if (import.meta.hot) {
  import.meta.hot.accept([], () => {
    if (w.__vite_react_root) {
      w.__vite_react_root.render(<App />);
    }
  });
}
