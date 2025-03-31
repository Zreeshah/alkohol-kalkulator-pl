
import React from 'react';
import Layout from '@/components/Layout';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from '@/components/ui/collapsible';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OdzyskaniePrawaJazdy = () => {
  const [openSections, setOpenSections] = React.useState({
    overview: true,
    eligibility: true,
    steps: true,
    specialCases: false,
    costs: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <Layout 
      title="Odzyskanie Prawa Jazdy - Procedura po Zatrzymaniu" 
      description="Dowiedz się jak odzyskać prawo jazdy po zatrzymaniu za jazdę pod wpływem alkoholu. Wymagane badania, dokumenty i terminy."
    >
      <div className="space-y-6">
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 flex items-start mb-6">
          <Info className="text-purple-700 mt-1 mr-3 flex-shrink-0" size={20} />
          <p className="text-sm text-purple-800">
            Odzyskanie prawa jazdy zatrzymanego w związku z jazdą pod wpływem alkoholu to proces, który wymaga spełnienia określonych warunków prawnych. 
            Poniżej znajdziesz kompletny przewodnik, który pomoże Ci zrozumieć niezbędne kroki.
          </p>
        </div>

        {/* Sekcja 1: Przegląd */}
        <Collapsible open={openSections.overview} onOpenChange={() => toggleSection('overview')}>
          <Card className="border-purple-100">
            <CardHeader className="bg-purple-50 border-b border-purple-100 py-3 px-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <CardTitle className="text-xl text-purple-800">Procedura odzyskania prawa jazdy</CardTitle>
                {openSections.overview ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </CollapsibleTrigger>
            </CardHeader>
            <CollapsibleContent>
              <CardContent className="pt-4">
                <p className="mb-4">
                  Odzyskanie prawa jazdy po wyroku za jazdę pod wpływem alkoholu to proces, który wymaga spełnienia określonych warunków i przejścia przez odpowiednie procedury. Poniżej przedstawiamy krok po kroku, jak odzyskać prawo jazdy zatrzymane z powodu jazdy po alkoholu.
                </p>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Sekcja 2: Kiedy można się ubiegać */}
        <Collapsible open={openSections.eligibility} onOpenChange={() => toggleSection('eligibility')}>
          <Card className="border-purple-100">
            <CardHeader className="bg-purple-50 border-b border-purple-100 py-3 px-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <CardTitle className="text-xl text-purple-800">Kiedy można ubiegać się o zwrot prawa jazdy?</CardTitle>
                {openSections.eligibility ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </CollapsibleTrigger>
            </CardHeader>
            <CollapsibleContent>
              <CardContent className="pt-4">
                <p className="mb-4">
                  O zwrot prawa jazdy można ubiegać się po upływie okresu, na jaki orzeczono zakaz prowadzenia pojazdów. Okres ten może wynosić:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Od 6 miesięcy do 3 lat - w przypadku wykroczenia (stężenie alkoholu od 0,2 do 0,5 promila)</li>
                  <li>Od 1 roku do 15 lat - w przypadku przestępstwa (stężenie alkoholu powyżej 0,5 promila)</li>
                  <li>Dożywotnio - w przypadku recydywy lub spowodowania śmiertelnego wypadku pod wpływem alkoholu</li>
                </ul>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Sekcja 3: Kroki do odzyskania */}
        <Collapsible open={openSections.steps} onOpenChange={() => toggleSection('steps')}>
          <Card className="border-purple-100">
            <CardHeader className="bg-purple-50 border-b border-purple-100 py-3 px-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <CardTitle className="text-xl text-purple-800">Kroki do odzyskania prawa jazdy</CardTitle>
                {openSections.steps ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </CollapsibleTrigger>
            </CardHeader>
            <CollapsibleContent>
              <CardContent className="pt-4 divide-y divide-purple-100">
                <div className="pb-4">
                  <h3 className="font-bold text-lg mb-2 text-purple-800">1. Upływ okresu zakazu prowadzenia pojazdów</h3>
                  <p>
                    Pierwszym warunkiem jest upływ całego okresu, na jaki sąd orzekł zakaz prowadzenia pojazdów. Ważne jest, aby dokładnie sprawdzić datę rozpoczęcia i zakończenia zakazu w wyroku sądu.
                  </p>
                </div>
                
                <div className="py-4">
                  <h3 className="font-bold text-lg mb-2 text-purple-800">2. Badania lekarskie i psychologiczne</h3>
                  <p className="mb-2">
                    Po upływie okresu zakazu należy przejść:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    <li>Badanie lekarskie u uprawnionego lekarza (koszt ok. 200-250 zł)</li>
                    <li>Badanie psychologiczne u uprawnionego psychologa transportu (koszt ok. 150-200 zł)</li>
                  </ul>
                  <p>
                    Badania te mają na celu stwierdzenie, czy nie ma przeciwwskazań zdrowotnych i psychologicznych do prowadzenia pojazdów. Lista uprawnionych lekarzy i psychologów dostępna jest w starostwie powiatowym.
                  </p>
                </div>
                
                <div className="py-4">
                  <h3 className="font-bold text-lg mb-2 text-purple-800">3. Kontrolne sprawdzenie kwalifikacji (egzamin teoretyczny)</h3>
                  <p>
                    W przypadku zatrzymania prawa jazdy na okres dłuższy niż rok konieczne jest zdanie egzaminu teoretycznego w Wojewódzkim Ośrodku Ruchu Drogowego. Egzamin ten obejmuje znajomość przepisów ruchu drogowego i nie zawiera części praktycznej. Koszt egzaminu to około 30-50 zł.
                  </p>
                </div>
                
                <div className="py-4">
                  <h3 className="font-bold text-lg mb-2 text-purple-800">4. Złożenie wniosku o zwrot prawa jazdy</h3>
                  <p className="mb-2">
                    Po spełnieniu powyższych warunków należy złożyć w wydziale komunikacji starostwa powiatowego wniosek o zwrot prawa jazdy wraz z:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Orzeczeniem lekarskim o braku przeciwwskazań zdrowotnych</li>
                    <li>Orzeczeniem psychologicznym o braku przeciwwskazań psychologicznych</li>
                    <li>Zaświadczeniem o zdaniu egzaminu teoretycznego (jeśli był wymagany)</li>
                    <li>Dowodem uiszczenia opłaty za wydanie prawa jazdy (około 100-150 zł)</li>
                    <li>Aktualnym zdjęciem</li>
                    <li>Kopią wyroku sądu</li>
                  </ul>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Sekcja 4: Specjalne przypadki */}
        <Collapsible open={openSections.specialCases} onOpenChange={() => toggleSection('specialCases')}>
          <Card className="border-purple-100">
            <CardHeader className="bg-purple-50 border-b border-purple-100 py-3 px-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <CardTitle className="text-xl text-purple-800">Specjalne przypadki</CardTitle>
                {openSections.specialCases ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </CollapsibleTrigger>
            </CardHeader>
            <CollapsibleContent>
              <CardContent className="pt-4 divide-y divide-purple-100">
                <div className="pb-4">
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Zatrzymanie prawa jazdy za prowadzenie w stanie nietrzeźwości po raz drugi</h3>
                  <p className="mb-2">
                    W przypadku recydywy (powtórne zatrzymanie za jazdę pod wpływem alkoholu w ciągu 5 lat), procedura jest bardziej rygorystyczna:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Zakaz prowadzenia pojazdów orzekany jest na minimum 3 lata</li>
                    <li>Może być orzeczony dożywotni zakaz prowadzenia pojazdów</li>
                    <li>Konieczne jest ponowne zdanie egzaminu na prawo jazdy (część teoretyczna i praktyczna)</li>
                  </ul>
                </div>
                
                <div className="py-4">
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Alkoholizm a odzyskanie prawa jazdy</h3>
                  <p>
                    Jeśli u osoby zdiagnozowano uzależnienie od alkoholu, może być wymagane przedstawienie zaświadczenia o przejściu terapii odwykowej lub opinii biegłego potwierdzającej, że uzależnienie nie stanowi przeszkody w prowadzeniu pojazdów.
                  </p>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Sekcja 5: Koszty */}
        <Collapsible open={openSections.costs} onOpenChange={() => toggleSection('costs')}>
          <Card className="border-purple-100">
            <CardHeader className="bg-purple-50 border-b border-purple-100 py-3 px-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <CardTitle className="text-xl text-purple-800">Koszty i podsumowanie</CardTitle>
                {openSections.costs ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </CollapsibleTrigger>
            </CardHeader>
            <CollapsibleContent>
              <CardContent className="pt-4 divide-y divide-purple-100">
                <div className="pb-4">
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Koszty odzyskania prawa jazdy</h3>
                  <p>
                    Łączny koszt odzyskania prawa jazdy po zatrzymaniu za jazdę po alkoholu może wynieść od 500 do 1000 zł, w zależności od tego, czy konieczne jest zdanie egzaminu teoretycznego, oraz od cen badań w danym regionie.
                  </p>
                </div>
                
                <div className="py-4">
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Podsumowanie</h3>
                  <p>
                    Odzyskanie prawa jazdy po wyroku za jazdę pod wpływem alkoholu to proces, który wymaga cierpliwości i spełnienia określonych warunków prawnych i administracyjnych. Kluczowe jest dokładne przestrzeganie terminów i procedur oraz dostarczenie wszystkich wymaganych dokumentów. Warto pamiętać, że celem tych procedur jest nie tylko ukaranie sprawcy, ale także zapewnienie, że osoby prowadzące pojazdy są do tego zdolne zarówno pod względem zdrowotnym, jak i psychologicznym.
                  </p>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>
      </div>
    </Layout>
  );
};

export default OdzyskaniePrawaJazdy;
