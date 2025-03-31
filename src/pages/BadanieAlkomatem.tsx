
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ArrowDown } from 'lucide-react';

const BadanieAlkomatem = () => {
  return (
    <Layout 
      title="Badanie Alkomatem - Procedura i Twoje Prawa" 
      description="Jak przebiega badanie alkomatem? Poznaj procedurę, swoje prawa i kiedy można zakwestionować wynik badania trzeźwości."
    >
      <article className="prose prose-purple max-w-none">
        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Badanie alkomatem - procedura i przepisy</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Badanie alkomatem jest standardową procedurą stosowaną przez policję w celu sprawdzenia trzeźwości kierowców. Aby badanie było przeprowadzone prawidłowo i jego wyniki były wiarygodne, musi spełniać określone wymogi proceduralne i techniczne.
        </p>

        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Rodzaje urządzeń do badania trzeźwości</h2>
        <p className="mb-4 leading-relaxed">
          W Polsce policja wykorzystuje różne typy urządzeń do badania zawartości alkoholu w wydychanym powietrzu:
        </p>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold text-purple-700 mb-4">1. Alkomaty przesiewowe</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="leading-relaxed">Służą do wstępnej kontroli trzeźwości</li>
              <li className="leading-relaxed">Wynik ma charakter orientacyjny</li>
              <li className="leading-relaxed">Nie drukują pokwitowania z wynikiem</li>
              <li className="leading-relaxed">Pozytywny wynik wymaga potwierdzenia alkomatem dowodowym</li>
            </ul>
            
            <h3 className="text-xl font-bold text-purple-700 mb-4">2. Alkomaty dowodowe</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li className="leading-relaxed">Wynik ma charakter dowodowy w postępowaniu</li>
              <li className="leading-relaxed">Drukują pokwitowanie z dokładnym wynikiem pomiaru</li>
              <li className="leading-relaxed">Podlegają regularnej kalibracji i certyfikacji</li>
              <li className="leading-relaxed">Posiadają świadectwo legalizacji (ważne 6 lub 12 miesięcy)</li>
              <li className="leading-relaxed">Najczęściej używane modele to Alkometr A2.0 i Alcotest 7410</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Prawidłowa procedura badania alkomatem</h2>
        <p className="mb-4 leading-relaxed">
          Badanie trzeźwości kierowcy powinno przebiegać według ściśle określonej procedury:
        </p>
        
        <Collapsible className="mb-8">
          <CollapsibleTrigger className="flex items-center gap-2 w-full p-3 bg-purple-100 text-purple-800 font-semibold rounded-md">
            <ArrowDown size={16} />
            <span>Przed badaniem</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 pt-6 border border-t-0 border-purple-100 rounded-b-md">
            <ol className="list-decimal pl-6 space-y-2">
              <li className="leading-relaxed">Policjant powinien poinformować kierowcę o zamiarze przeprowadzenia badania</li>
              <li className="leading-relaxed">Urządzenie musi być sprawne i posiadać ważne świadectwo legalizacji</li>
              <li className="leading-relaxed">Policjant powinien przygotować nowy, jednorazowy ustnik</li>
              <li className="leading-relaxed">Badanie powinno odbywać się w odpowiednich warunkach (temperatura, brak zakłóceń)</li>
            </ol>
          </CollapsibleContent>
        </Collapsible>
        
        <Collapsible className="mb-8">
          <CollapsibleTrigger className="flex items-center gap-2 w-full p-3 bg-purple-100 text-purple-800 font-semibold rounded-md">
            <ArrowDown size={16} />
            <span>W trakcie badania</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 pt-6 border border-t-0 border-purple-100 rounded-b-md">
            <ol className="list-decimal pl-6 space-y-2">
              <li className="leading-relaxed">Policjant powinien poinstruować kierowcę o sposobie przeprowadzenia badania</li>
              <li className="leading-relaxed">Kierowca powinien dmuchać w ustnik jednym, długim wydechem aż do sygnału dźwiękowego</li>
              <li className="leading-relaxed">Przy alkomatach dowodowych wykonuje się dwa pomiary w odstępie 15-20 minut</li>
              <li className="leading-relaxed">Różnica między wynikami nie powinna przekraczać określonej tolerancji</li>
            </ol>
          </CollapsibleContent>
        </Collapsible>
        
        <Collapsible className="mb-8">
          <CollapsibleTrigger className="flex items-center gap-2 w-full p-3 bg-purple-100 text-purple-800 font-semibold rounded-md">
            <ArrowDown size={16} />
            <span>Po badaniu</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 pt-6 border border-t-0 border-purple-100 rounded-b-md">
            <ol className="list-decimal pl-6 space-y-2">
              <li className="leading-relaxed">Policjant powinien pokazać kierowcy wynik badania</li>
              <li className="leading-relaxed">W przypadku alkomatów dowodowych kierowca otrzymuje wydruk z wynikiem</li>
              <li className="leading-relaxed">W razie pozytywnego wyniku policjant informuje o konsekwencjach prawnych</li>
              <li className="leading-relaxed">Kierowca ma prawo zażądać badania krwi na zawartość alkoholu</li>
            </ol>
          </CollapsibleContent>
        </Collapsible>

        <div className="bg-blue-50 p-6 rounded-md border-l-4 border-blue-300 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Prawa kierowcy podczas badania alkomatem</h2>
          <p className="mb-3 leading-relaxed">
            Kierowca poddawany badaniu trzeźwości ma określone prawa, które powinien znać:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="leading-relaxed">Prawo do informacji o procedurze badania</li>
            <li className="leading-relaxed">Prawo do weryfikacji, czy alkomat posiada ważne świadectwo legalizacji</li>
            <li className="leading-relaxed">Prawo do żądania użycia nowego, jednorazowego ustnika</li>
            <li className="leading-relaxed">Prawo do żądania badania krwi (na własny koszt, zwracany w przypadku wyniku negatywnego)</li>
            <li className="leading-relaxed">Prawo do odmowy badania alkomatem ze względów zdrowotnych (wtedy przeprowadza się badanie krwi)</li>
            <li className="leading-relaxed">Prawo do otrzymania wydruku z wynikiem badania (przy alkomatach dowodowych)</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Obowiązki kierowcy podczas kontroli trzeźwości</h2>
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="mb-4 leading-relaxed">
              Zgodnie z art. 129 ustawy Prawo o ruchu drogowym, kierowca ma obowiązek poddać się badaniu trzeźwości na żądanie uprawnionego organu. Odmowa poddania się badaniu:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="leading-relaxed font-semibold text-red-700">Jest traktowana jak przyznanie się do prowadzenia pojazdu w stanie nietrzeźwości</li>
              <li className="leading-relaxed">Skutkuje zatrzymaniem prawa jazdy</li>
              <li className="leading-relaxed">Może skutkować przymusowym badaniem krwi</li>
              <li className="leading-relaxed">Podlega takim samym sankcjom jak jazda w stanie nietrzeźwości</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Częste błędy proceduralne podczas badania</h2>
        <p className="mb-4 leading-relaxed">
          Podczas kontroli trzeźwości mogą wystąpić nieprawidłowości, które wpływają na wiarygodność wyniku:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li className="leading-relaxed">Badanie przeprowadzone w zbyt krótkim czasie po spożyciu alkoholu (mniej niż 15 minut)</li>
          <li className="leading-relaxed">Użycie alkomatu bez ważnego świadectwa legalizacji</li>
          <li className="leading-relaxed">Brak drugiego, kontrolnego pomiaru</li>
          <li className="leading-relaxed">Zbyt duża różnica między dwoma pomiarami</li>
          <li className="leading-relaxed">Badanie w nieodpowiednich warunkach (np. zbyt niska temperatura)</li>
          <li className="leading-relaxed">Nieprawidłowe pouczenie kierowcy o procedurze i jego prawach</li>
        </ul>

        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Kwestionowanie wyników badania alkomatem</h2>
        <p className="mb-4 leading-relaxed">
          Jeśli kierowca uważa, że wynik badania jest nieprawidłowy, może go zakwestionować:
        </p>
        <ol className="list-decimal pl-6 mb-8 space-y-2">
          <li className="leading-relaxed">Zażądać natychmiastowego badania krwi (najskuteczniejsza metoda)</li>
          <li className="leading-relaxed">Zwrócić uwagę na nieprawidłowości proceduralne i żądać ich odnotowania</li>
          <li className="leading-relaxed">Sprawdzić świadectwo legalizacji alkomatu</li>
          <li className="leading-relaxed">W postępowaniu sądowym wnioskować o weryfikację poprawności badania</li>
          <li className="leading-relaxed">Powołać biegłego, który oceni wiarygodność badania</li>
        </ol>

        <div className="bg-amber-50 p-6 rounded-md border-l-4 border-amber-300 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Czynniki wpływające na wynik badania</h2>
          <p className="mb-3 leading-relaxed">
            Na wynik badania alkomatem mogą wpływać różne czynniki:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="leading-relaxed">Niektóre schorzenia (np. cukrzyca, choroby układu oddechowego)</li>
            <li className="leading-relaxed">Przyjmowanie określonych leków</li>
            <li className="leading-relaxed">Spożycie niektórych produktów spożywczych (np. cukierki z alkoholem)</li>
            <li className="leading-relaxed">Używanie płynów do płukania jamy ustnej zawierających alkohol</li>
            <li className="leading-relaxed">Spożycie alkoholu tuż przed badaniem (alkohol zalegający w jamie ustnej)</li>
          </ul>
          <p className="mt-3 leading-relaxed">
            Warto jednak podkreślić, że współczesne alkomaty dowodowe są coraz bardziej odporne na te czynniki, a właściwe przeprowadzenie procedury (w tym drugi pomiar po 15-20 minutach) ma na celu wyeliminowanie ich wpływu.
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Podsumowanie</h2>
          <p className="mb-4 leading-relaxed">
            Badanie alkomatem to standardowa procedura kontroli trzeźwości kierowców. Aby badanie było wiarygodne i mogło stanowić dowód w postępowaniu, musi być przeprowadzone zgodnie z określonymi wymogami proceduralnymi i technicznymi. Kierowca powinien znać swoje prawa i obowiązki związane z badaniem, a w razie wątpliwości może skorzystać z prawa do badania krwi.
          </p>
          <p className="font-semibold text-purple-900">
            Najważniejsze jest jednak, aby pamiętać, że jedynym pewnym sposobem uniknięcia problemów związanych z kontrolą trzeźwości jest całkowita abstynencja przed prowadzeniem pojazdu. Żadne okoliczności nie usprawiedliwiają decyzji o prowadzeniu samochodu po spożyciu alkoholu.
          </p>
        </div>
      </article>
    </Layout>
  );
};

export default BadanieAlkomatem;
