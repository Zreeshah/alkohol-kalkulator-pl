
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";

// Eagerly load the Index page for fast FCP
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazily load other pages as they're not needed for initial render
const BlokadaAlkoholowa = lazy(() => import("./pages/BlokadaAlkoholowa"));
const DobrowolnePoddanieKarze = lazy(() => import("./pages/DobrowolnePoddanieKarze"));
const OdzyskaniePrawaJazdy = lazy(() => import("./pages/OdzyskaniePrawaJazdy"));
const WarunkoweUmorzenie = lazy(() => import("./pages/WarunkoweUmorzenie"));
const AlkoholNaSwiecie = lazy(() => import("./pages/AlkoholNaSwiecie"));
const Artykul178a = lazy(() => import("./pages/Artykul178a"));
const WypadekPoAlkoholu = lazy(() => import("./pages/WypadekPoAlkoholu"));
const BadanieAlkomatem = lazy(() => import("./pages/BadanieAlkomatem"));
const KontrolaPolicji = lazy(() => import("./pages/KontrolaPolicji"));
const AdwokatJazdaPoAlkoholu = lazy(() => import("./pages/AdwokatJazdaPoAlkoholu"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const PolitykaPrywatnosci = lazy(() => import("./pages/PolitykaPrywatnosci"));

// Simple loading component for lazy-loaded routes
const PageLoading = () => (
  <div className="min-h-screen flex items-center justify-center bg-purple-50">
    <div className="text-purple-800">Ładowanie...</div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blokada-alkoholowa" element={<BlokadaAlkoholowa />} />
              <Route path="/dobrowolne-poddanie-karze" element={<DobrowolnePoddanieKarze />} />
              <Route path="/odzyskanie-prawa-jazdy" element={<OdzyskaniePrawaJazdy />} />
              <Route path="/warunkowe-umorzenie" element={<WarunkoweUmorzenie />} />
              <Route path="/alkohol-na-swiecie" element={<AlkoholNaSwiecie />} />
              <Route path="/artykul-178a" element={<Artykul178a />} />
              <Route path="/wypadek-po-alkoholu" element={<WypadekPoAlkoholu />} />
              <Route path="/badanie-alkomatem" element={<BadanieAlkomatem />} />
              <Route path="/kontrola-policji" element={<KontrolaPolicji />} />
              <Route path="/adwokat-jazda-po-alkoholu" element={<AdwokatJazdaPoAlkoholu />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosci />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
