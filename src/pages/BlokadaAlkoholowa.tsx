
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ArrowDown } from 'lucide-react';

const BlokadaAlkoholowa = () => {
  return (
    <Layout 
      title="Blokada Alkoholowa - Co Warto Wiedzieć" 
      description="Poznaj zasady działania blokad alkoholowych w pojazdach. Przepisy, koszty instalacji i alternatywa dla zakazu prowadzenia pojazdów."
    >
      <article className="prose prose-purple max-w-none">
        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Czym jest blokada alkoholowa?</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Blokada alkoholowa (alkoblokada) to urządzenie, które uniemożliwia uruchomienie pojazdu osobie będącej pod wpływem alkoholu. System składa się z analizatora oddechu połączonego z układem zapłonowym samochodu. Aby uruchomić silnik, kierowca musi najpierw dmuchnąć w ustnik urządzenia. Jeśli zostanie wykryta obecność alkoholu powyżej ustalonego limitu, pojazd nie odpali.
        </p>

        <Card className="mb-8 bg-purple-50 border-purple-200">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold text-purple-700 mb-4">Jak działa blokada alkoholowa?</h3>
            <p className="mb-4 leading-relaxed">
              Blokada alkoholowa działa na zasadzie pomiaru stężenia alkoholu w wydychanym powietrzu, podobnie jak policyjny alkomat. Proces użycia urządzenia wygląda następująco:
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li className="leading-relaxed">Kierowca przed uruchomieniem silnika musi wykonać test trzeźwości</li>
              <li className="leading-relaxed">Jeśli wynik jest negatywny (brak alkoholu lub stężenie poniżej progu), samochód można uruchomić</li>
              <li className="leading-relaxed">Jeśli wynik jest pozytywny (stężenie alkoholu powyżej progu), zapłon jest blokowany</li>
              <li className="leading-relaxed">Urządzenie może wymagać dodatkowych testów w trakcie jazdy (tzw. retesty)</li>
            </ol>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Kiedy stosuje się blokadę alkoholową w Polsce?</h2>
        <p className="mb-6 leading-relaxed">
          W Polsce blokady alkoholowe mogą być stosowane w ramach programów profilaktycznych lub jako środek karny wobec osób skazanych za prowadzenie pojazdu pod wpływem alkoholu. Sąd może orzec obowiązek prowadzenia pojazdu wyposażonego w blokadę alkoholową zamiast całkowitego zakazu prowadzenia pojazdów.
        </p>

        <div className="bg-blue-50 p-6 rounded-md border-l-4 border-blue-300 mb-8">
          <h3 className="text-xl font-bold text-purple-700 mb-4">Przepisy prawne dotyczące alkoblokad</h3>
          <p className="mb-4 leading-relaxed">
            Zgodnie z przepisami Kodeksu karnego oraz ustawy Prawo o ruchu drogowym, sąd może orzec wobec sprawcy przestępstwa prowadzenia pojazdu w stanie nietrzeźwości obowiązek prowadzenia wyłącznie pojazdów wyposażonych w blokadę alkoholową. Dotyczy to osób, które:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="leading-relaxed">Zostały skazane za prowadzenie pojazdu w stanie nietrzeźwości</li>
            <li className="leading-relaxed">Mają orzeczony środek karny w postaci zakazu prowadzenia pojazdów</li>
            <li className="leading-relaxed">Miały stężenie alkoholu we krwi od 0,5 do 1,5 promila</li>
          </ul>
        </div>

        <Collapsible className="mb-8">
          <CollapsibleTrigger className="flex items-center gap-2 w-full p-3 bg-purple-100 text-purple-800 font-semibold rounded-md">
            <ArrowDown size={16} />
            <span>Zalety stosowania blokad alkoholowych</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 pt-6 border border-t-0 border-purple-100 rounded-b-md">
            <p className="mb-4 leading-relaxed">
              Alkoblokady mają szereg zalet zarówno dla kierowców, jak i dla ogólnego bezpieczeństwa na drogach:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="leading-relaxed">Zmniejszają ryzyko recydywy wśród kierowców zatrzymanych za jazdę pod wpływem alkoholu</li>
              <li className="leading-relaxed">Pozwalają osobom z wyrokiem za jazdę po alkoholu na zachowanie mobilności</li>
              <li className="leading-relaxed">Zwiększają ogólne bezpieczeństwo na drogach</li>
              <li className="leading-relaxed">Mają walor edukacyjny i prewencyjny</li>
            </ul>
          </CollapsibleContent>
        </Collapsible>

        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Koszty instalacji i użytkowania</h2>
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="mb-4 leading-relaxed">
              Koszt instalacji blokady alkoholowej w Polsce waha się od 2500 do 4000 złotych. Dodatkowo należy uwzględnić koszty okresowej kalibracji urządzenia (co 6-12 miesięcy) oraz ewentualne opłaty za przechowywanie danych. Osoba skazana ponosi wszystkie koszty związane z instalacją i obsługą urządzenia.
            </p>
            <div className="bg-amber-50 p-4 rounded-md border-l-4 border-amber-300 my-4">
              <p className="text-amber-800">
                Warto pamiętać, że mimo wysokich kosztów początkowych, alkoblokada może być korzystnym rozwiązaniem w porównaniu z całkowitym zakazem prowadzenia pojazdów, który może znacząco wpłynąć na życie zawodowe i osobiste.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Podsumowanie</h2>
          <p className="mb-4 leading-relaxed">
            Blokady alkoholowe stanowią skuteczne narzędzie w walce z problemem prowadzenia pojazdów pod wpływem alkoholu. Umożliwiają one osobom skazanym za jazdę pod wpływem alkoholu zachowanie mobilności, jednocześnie zapewniając, że nie będą prowadzić pojazdu po spożyciu alkoholu. Choć wiążą się z kosztami dla kierowcy, to stanowią alternatywę dla całkowitego zakazu prowadzenia pojazdów.
          </p>
          <p className="font-semibold text-purple-900">
            Najważniejsze jest jednak, aby pamiętać, że najlepszym rozwiązaniem jest całkowita abstynencja przed prowadzeniem pojazdu. Żadne urządzenie techniczne nie zastąpi odpowiedzialności i zdrowego rozsądku kierowcy.
          </p>
        </div>
      </article>
    </Layout>
  );
};

export default BlokadaAlkoholowa;
