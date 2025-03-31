
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlokadaAlkoholowa from "./pages/BlokadaAlkoholowa";
import DobrowolnePoddanieKarze from "./pages/DobrowolnePoddanieKarze";
import OdzyskaniePrawaJazdy from "./pages/OdzyskaniePrawaJazdy";
import WarunkoweUmorzenie from "./pages/WarunkoweUmorzenie";
import AlkoholNaSwiecie from "./pages/AlkoholNaSwiecie";
import Artykul178a from "./pages/Artykul178a";
import WypadekPoAlkoholu from "./pages/WypadekPoAlkoholu";
import BadanieAlkomatem from "./pages/BadanieAlkomatem";
import KontrolaPolicji from "./pages/KontrolaPolicji";
import AdwokatJazdaPoAlkoholu from "./pages/AdwokatJazdaPoAlkoholu";
import Kontakt from "./pages/Kontakt";
import PolitykaPrywatnosci from "./pages/PolitykaPrywatnosci";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
