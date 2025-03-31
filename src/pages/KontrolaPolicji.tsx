
import React from 'react';
import Layout from '@/components/Layout';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from '@/components/ui/collapsible';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const KontrolaPolicji = () => {
  const [openSections, setOpenSections] = React.useState({
    basicRules: true,
    stopProcedure: true,
    sobrietyCheck: false,
    rightsObligations: false,
    specialSituations: false,
    consequences: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <Layout 
      title="Kontrola Trzeźwości - Prawa i Obowiązki" 
      description="Dowiedz się jak zachować się podczas kontroli trzeźwości. Poznaj swoje prawa, obowiązki i procedury policyjne podczas badania alkomatem."
    >
      <div className="space-y-6">
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 flex items-start mb-6">
          <Info className="text-purple-700 mt-1 mr-3 flex-shrink-0" size={20} />
          <p className="text-sm text-purple-800">
            Kontrola drogowa, w tym badanie trzeźwości, może być stresującym doświadczeniem. Ten poradnik pomoże Ci zrozumieć
            przebieg kontroli, Twoje prawa i obowiązki oraz sposób postępowania w różnych sytuacjach. Pamiętaj, że najlepszym
            sposobem uniknięcia problemów jest całkowita abstynencja przed prowadzeniem pojazdu.
          </p>
        </div>

        {/* Sekcja 1: Podstawowe zasady */}
        <Collapsible open={openSections.basicRules} onOpenChange={() => toggleSection('basicRules')}>
          <Card className="border-purple-100">
            <CardHeader className="bg-purple-50 border-b border-purple-100 py-3 px-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <CardTitle className="text-xl text-purple-800">Podstawowe zasady podczas kontroli drogowej</CardTitle>
                {openSections.basicRules ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </CollapsibleTrigger>
            </CardHeader>
            <CollapsibleContent>
              <CardContent className="pt-4">
                <p>
                  Kontrola drogowa, w tym badanie trzeźwości, jest stresującym doświadczeniem dla wielu kierowców. Niezależnie od tego, czy spożywałeś alkohol czy nie, warto znać właściwe zasady zachowania, które pomogą przejść przez kontrolę sprawnie i zgodnie z prawem.
                </p>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Sekcja 2: Zatrzymanie do kontroli */}
        <Collapsible open={openSections.stopProcedure} onOpenChange={() => toggleSection('stopProcedure')}>
          <Card className="border-purple-100">
            <CardHeader className="bg-purple-50 border-b border-purple-100 py-3 px-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <CardTitle className="text-xl text-purple-800">Zatrzymanie do kontroli</CardTitle>
                {openSections.stopProcedure ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </CollapsibleTrigger>
            </CardHeader>
            <CollapsibleContent>
              <CardContent className="pt-4 divide-y divide-purple-100">
                <div className="pb-4">
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Jak rozpoznać prawomocne zatrzymanie?</h3>
                  <p className="mb-2">
                    Policjant może zatrzymać pojazd do kontroli:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>W umundurowaniu, dając sygnał do zatrzymania tarczą lub ręką</li>
                    <li>W radiowozie oznakowanym, używając sygnałów świetlnych i dźwiękowych</li>
                    <li>W nieoznakowanym radiowozie, używając sygnałów świetlnych i dźwiękowych oraz pokazując legitymację służbową</li>
                  </ul>
                </div>
                
                <div className="py-4">
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Pierwsze chwile po zatrzymaniu</h3>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Zatrzymaj pojazd w bezpiecznym miejscu, jak najbliżej prawej krawędzi jezdni</li>
                    <li>Wyłącz silnik i włącz światła awaryjne</li>
                    <li>Pozostań w pojeździe, trzymając ręce na kierownicy (chyba że policjant poprosi o opuszczenie pojazdu)</li>
                    <li>Opuść szybę, aby umożliwić komunikację</li>
                    <li>Przygotuj dokumenty (prawo jazdy, dowód rejestracyjny, OC), ale nie wyjmuj ich, dopóki policjant o to nie poprosi</li>
                  </ol>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Sekcja 3: Kontrola trzeźwości */}
        <Collapsible open={openSections.sobrietyCheck} onOpenChange={() => toggleSection('sobrietyCheck')}>
          <Card className="border-purple-100">
            <CardHeader className="bg-purple-50 border-b border-purple-100 py-3 px-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <CardTitle className="text-xl text-purple-800">Kontrola trzeźwości</CardTitle>
                {openSections.sobrietyCheck ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </CollapsibleTrigger>
            </CardHeader>
            <CollapsibleContent>
              <CardContent className="pt-4 divide-y divide-purple-100">
                <div className="pb-4">
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Badanie alkomatem</h3>
                  <p className="mb-2">
                    Podczas rutynowej kontroli lub w ramach specjalnych akcji policjant może przeprowadzić badanie trzeźwości:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Policjant powinien poinformować o zamiarze przeprowadzenia badania</li>
                    <li>
                      <p className="mb-1">Przed badaniem warto poinformować policjanta, jeśli:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Spożywałeś alkohol w ciągu ostatnich 30 minut (wtedy badanie powinno być odroczone)</li>
                        <li>Cierpisz na choroby mogące wpływać na wynik (np. cukrzyca, astma)</li>
                        <li>Używałeś płynów do płukania jamy ustnej zawierających alkohol</li>
                      </ul>
                    </li>
                    <li>
                      <p className="mb-1">Podczas badania:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Weź głęboki wdech i wydmuchaj powietrze jednym, długim wydechem</li>
                        <li>Kontynuuj wydech do momentu sygnału dźwiękowego</li>
                        <li>Nie przerywaj wydechu przedwcześnie</li>
                      </ul>
                    </li>
                  </ol>
                </div>
                
                <div className="py-4">
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Wynik negatywny</h3>
                  <p className="mb-2">
                    Jeśli wynik badania jest negatywny (0,0‰ lub poniżej 0,2‰):
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Policjant powinien poinformować o tym fakcie</li>
                    <li>Kontrola zostaje zakończona lub kontynuowana w innym zakresie</li>
                    <li>Możesz kontynuować jazdę</li>
                  </ul>
                </div>
                
                <div className="py-4">
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Wynik pozytywny</h3>
                  <p className="mb-2">
                    Jeśli wynik badania wskazuje na obecność alkoholu (0,2‰ lub więcej):
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Zachowaj spokój i współpracuj z policjantem</li>
                    <li>Zostaniesz poddany drugiemu badaniu alkomatem dowodowym</li>
                    <li>Masz prawo zażądać badania krwi (na własny koszt, zwracany jeśli wynik okaże się negatywny)</li>
                    <li>Nie argumentuj i nie przekonuj policjanta, że "czujesz się trzeźwy" - liczy się wynik badania, nie subiektywne odczucia</li>
                  </ul>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Sekcja 4: Prawa i obowiązki */}
        <Collapsible open={openSections.rightsObligations} onOpenChange={() => toggleSection('rightsObligations')}>
          <Card className="border-purple-100">
            <CardHeader className="bg-purple-50 border-b border-purple-100 py-3 px-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <CardTitle className="text-xl text-purple-800">Prawa i obowiązki kierowcy podczas kontroli</CardTitle>
                {openSections.rightsObligations ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </CollapsibleTrigger>
            </CardHeader>
            <CollapsibleContent>
              <CardContent className="pt-4 divide-y divide-purple-100">
                <div className="pb-4">
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Twoje prawa:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Prawo do weryfikacji tożsamości policjanta (możesz poprosić o okazanie legitymacji służbowej)</li>
                    <li>Prawo do informacji o przyczynie kontroli</li>
                    <li>Prawo do sprawdzenia, czy alkomat ma ważne świadectwo legalizacji</li>
                    <li>Prawo do żądania użycia jednorazowego, nowego ustnika</li>
                    <li>Prawo do żądania badania krwi (na własny koszt, zwracany przy wyniku negatywnym)</li>
                    <li>Prawo do otrzymania wydruku z wynikiem badania (przy alkomatach dowodowych)</li>
                    <li>Prawo do odmowy podpisania protokołu, jeśli się z nim nie zgadzasz</li>
                  </ul>
                </div>
                
                <div className="py-4">
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Twoje obowiązki:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Obowiązek zatrzymania pojazdu na żądanie uprawnionego organu</li>
                    <li>Obowiązek okazania wymaganych dokumentów</li>
                    <li>Obowiązek poddania się badaniu trzeźwości (odmowa traktowana jest jak przyznanie się do prowadzenia pojazdu w stanie nietrzeźwości)</li>
                    <li>Obowiązek stosowania się do poleceń policjanta</li>
                    <li>Obowiązek zachowania spokoju i nie utrudniania czynności służbowych</li>
                  </ul>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Sekcja 5: Specjalne sytuacje */}
        <Collapsible open={openSections.specialSituations} onOpenChange={() => toggleSection('specialSituations')}>
          <Card className="border-purple-100">
            <CardHeader className="bg-purple-50 border-b border-purple-100 py-3 px-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <CardTitle className="text-xl text-purple-800">Co robić w szczególnych sytuacjach?</CardTitle>
                {openSections.specialSituations ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </CollapsibleTrigger>
            </CardHeader>
            <CollapsibleContent>
              <CardContent className="pt-4 divide-y divide-purple-100">
                <div className="pb-4">
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Gdy jesteś trzeźwy, ale alkomat pokazuje wynik pozytywny:</h3>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Zachowaj spokój i nie wdawaj się w kłótnie</li>
                    <li>Poproś o drugie badanie alkomatem dowodowym</li>
                    <li>Zażądaj badania krwi</li>
                    <li>Jeśli to możliwe, poproś o odnotowanie okoliczności, które mogły wpłynąć na wynik (np. choroby, leki)</li>
                    <li>Nie podpisuj protokołu, jeśli się z nim nie zgadzasz - zaznacz powód odmowy</li>
                  </ol>
                </div>
                
                <div className="py-4">
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Gdy odmówisz badania alkomatem:</h3>
                  <p className="mb-2">
                    Pamiętaj, że odmowa badania:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Jest traktowana jak przyznanie się do prowadzenia pojazdu w stanie nietrzeźwości</li>
                    <li>Skutkuje zatrzymaniem prawa jazdy</li>
                    <li>Może skutkować przymusowym badaniem krwi</li>
                    <li>Podlega takim samym sankcjom jak jazda w stanie nietrzeźwości</li>
                  </ul>
                  <p className="mt-2">
                    Jedynym uzasadnionym powodem odmowy może być stan zdrowia uniemożliwiający przeprowadzenie badania wydychanym powietrzem.
                  </p>
                </div>
                
                <div className="py-4">
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Gdy jesteś po spożyciu alkoholu:</h3>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Nie zaprzeczaj i nie kłam - to tylko pogarsza sytuację</li>
                    <li>Zachowaj spokój i współpracuj z policjantem</li>
                    <li>Nie próbuj przekonywać, że "wypiłeś tylko jedno piwo" lub "czujesz się dobrze"</li>
                    <li>Przyjmij konsekwencje swojego postępowania</li>
                    <li>Nie wsiadaj za kierownicę po spożyciu alkoholu, nawet jeśli wydaje ci się, że jesteś trzeźwy</li>
                  </ol>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Sekcja 6: Konsekwencje */}
        <Collapsible open={openSections.consequences} onOpenChange={() => toggleSection('consequences')}>
          <Card className="border-purple-100">
            <CardHeader className="bg-purple-50 border-b border-purple-100 py-3 px-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <CardTitle className="text-xl text-purple-800">Konsekwencje jazdy po alkoholu</CardTitle>
                {openSections.consequences ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </CollapsibleTrigger>
            </CardHeader>
            <CollapsibleContent>
              <CardContent className="pt-4 divide-y divide-purple-100">
                <div className="pb-4">
                  <p className="mb-4">
                    Warto przypomnieć, że jazda po alkoholu wiąże się z poważnymi konsekwencjami:
                  </p>
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Stan po użyciu alkoholu (0,2‰ - 0,5‰):</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Wykroczenie zagrożone aresztem lub grzywną</li>
                    <li>Zakaz prowadzenia pojazdów od 6 miesięcy do 3 lat</li>
                    <li>Od 10 do 15 punktów karnych</li>
                  </ul>
                </div>
                
                <div className="py-4">
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Stan nietrzeźwości (powyżej 0,5‰):</h3>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Przestępstwo zagrożone grzywną, karą ograniczenia wolności lub pozbawienia wolności do lat 2</li>
                    <li>Zakaz prowadzenia pojazdów od 1 roku do 15 lat</li>
                    <li>Świadczenie pieniężne na Fundusz Pomocy Pokrzywdzonym (minimum 5000 zł)</li>
                  </ul>
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Podsumowanie</h3>
                  <p>
                    Kontrola drogowa, w tym badanie trzeźwości, to rutynowa procedura, która może przebiec sprawnie, jeśli będziesz znał swoje prawa i obowiązki. Kluczowe zasady to: zachowanie spokoju, współpraca z policjantem, znajomość procedury oraz świadomość swoich praw.
                  </p>
                  <p className="mt-2">
                    Pamiętaj jednak, że najlepszym sposobem na uniknięcie problemów związanych z kontrolą trzeźwości jest całkowita abstynencja przed prowadzeniem pojazdu. Żadne okoliczności nie usprawiedliwiają decyzji o prowadzeniu samochodu po spożyciu alkoholu.
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

export default KontrolaPolicji;
