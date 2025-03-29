
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ArrowDown } from 'lucide-react';

const DobrowolnePoddanieKarze = () => {
  return (
    <Layout 
      title="Dobrowolne poddanie się karze za jazdę po alkoholu" 
      description="Poznaj procedurę i konsekwencje dobrowolnego poddania się karze za prowadzenie pojazdu pod wpływem alkoholu w Polsce."
    >
      <article className="prose prose-purple max-w-none">
        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Czym jest dobrowolne poddanie się karze?</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Dobrowolne poddanie się karze to procedura przewidziana w polskim prawie karnym, która umożliwia skrócenie postępowania sądowego. W przypadku jazdy po alkoholu, sprawca może złożyć wniosek o dobrowolne poddanie się karze, co oznacza przyznanie się do winy i zaakceptowanie proponowanej przez prokuratora kary bez przeprowadzania pełnego procesu sądowego.
        </p>

        <Card className="mb-8 bg-purple-50 border-purple-200">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Podstawa prawna</h2>
            <p className="mb-3 leading-relaxed">
              Instytucja dobrowolnego poddania się karze jest uregulowana w art. 335 i art. 387 Kodeksu postępowania karnego:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="leading-relaxed">Art. 335 KPK - wniosek o skazanie bez rozprawy (na etapie postępowania przygotowawczego)</li>
              <li className="leading-relaxed">Art. 387 KPK - wniosek o dobrowolne poddanie się karze (na etapie postępowania sądowego)</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Kiedy można skorzystać z dobrowolnego poddania się karze?</h2>
        <p className="mb-4 leading-relaxed">
          Z tego rozwiązania można skorzystać w przypadku przestępstw zagrożonych karą do 8 lat pozbawienia wolności, co obejmuje typowe przypadki jazdy pod wpływem alkoholu. Jest to możliwe gdy:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li className="leading-relaxed">Okoliczności popełnienia przestępstwa nie budzą wątpliwości</li>
          <li className="leading-relaxed">Sprawca przyznaje się do winy</li>
          <li className="leading-relaxed">Postawa sprawcy wskazuje, że cele postępowania zostaną osiągnięte mimo skrócenia procesu</li>
          <li className="leading-relaxed">Prokurator i pokrzywdzony (jeśli taki występuje) zgadzają się na tę procedurę</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-md border-l-4 border-blue-300 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Procedura dobrowolnego poddania się karze</h2>
          <p className="mb-3 leading-relaxed">
            Procedura składa się z następujących kroków:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li className="leading-relaxed">Sprawca składa wniosek o dobrowolne poddanie się karze</li>
            <li className="leading-relaxed">Prokurator proponuje wymiar kary</li>
            <li className="leading-relaxed">Jeśli sprawca zgadza się na proponowaną karę, prokurator kieruje do sądu wniosek o jej zatwierdzenie</li>
            <li className="leading-relaxed">Sąd na posiedzeniu (nie na rozprawie) może zatwierdzić porozumienie lub je odrzucić</li>
            <li className="leading-relaxed">Po zatwierdzeniu przez sąd, wyrok staje się prawomocny</li>
          </ol>
        </div>

        <Collapsible className="mb-8">
          <CollapsibleTrigger className="flex items-center gap-2 w-full p-3 bg-purple-100 text-purple-800 font-semibold rounded-md">
            <ArrowDown size={16} />
            <span>Korzyści z dobrowolnego poddania się karze</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 pt-6 border border-t-0 border-purple-100 rounded-b-md">
            <p className="mb-3 leading-relaxed">
              Decydując się na dobrowolne poddanie się karze za jazdę po alkoholu, oskarżony może liczyć na kilka korzyści:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="leading-relaxed">Szybsze zakończenie sprawy</li>
              <li className="leading-relaxed">Zazwyczaj łagodniejszy wymiar kary</li>
              <li className="leading-relaxed">Mniejsze koszty postępowania</li>
              <li className="leading-relaxed">Uniknięcie publicznej rozprawy</li>
              <li className="leading-relaxed">Możliwość wcześniejszego powrotu do normalnego życia</li>
            </ul>
          </CollapsibleContent>
        </Collapsible>

        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Typowe kary przy dobrowolnym poddaniu się karze za jazdę po alkoholu</h2>
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="mb-4 leading-relaxed">
              W przypadku dobrowolnego poddania się karze za prowadzenie pojazdu pod wpływem alkoholu, typowe kary obejmują:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="leading-relaxed">Karę grzywny (od kilku do kilkunastu tysięcy złotych)</li>
              <li className="leading-relaxed">Zakaz prowadzenia pojazdów (najczęściej od 1 do 3 lat)</li>
              <li className="leading-relaxed">Karę ograniczenia wolności lub karę pozbawienia wolności w zawieszeniu</li>
              <li className="leading-relaxed">Świadczenie pieniężne na rzecz Funduszu Pomocy Pokrzywdzonym</li>
            </ul>
            <div className="bg-amber-50 p-4 rounded-md border-l-4 border-amber-300 mt-4">
              <p className="text-amber-800">
                Warto pamiętać, że wymiar kary zależy od wielu czynników, w tym stężenia alkoholu we krwi, konsekwencji czynu, dotychczasowej karalności sprawcy i jego postawy po zatrzymaniu.
              </p>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Czy warto decydować się na dobrowolne poddanie się karze?</h2>
        <p className="mb-4 leading-relaxed">
          Decyzja o dobrowolnym poddaniu się karze powinna być podjęta po konsultacji z adwokatem. Jest to dobre rozwiązanie dla osób, które:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li className="leading-relaxed">Przyznają się do popełnienia czynu</li>
          <li className="leading-relaxed">Chcą jak najszybciej zakończyć sprawę</li>
          <li className="leading-relaxed">Nie mają wcześniejszej karalności za podobne przestępstwa</li>
          <li className="leading-relaxed">Nie spowodowały wypadku będąc pod wpływem alkoholu</li>
        </ul>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Podsumowanie</h2>
          <p className="mb-4 leading-relaxed">
            Dobrowolne poddanie się karze to procedura, która może znacząco uprościć i przyspieszyć postępowanie karne w przypadku jazdy po alkoholu. Choć wiąże się z przyznaniem do winy, często skutkuje łagodniejszym wymiarem kary i szybszym powrotem do normalnego życia. Każdy przypadek jest jednak indywidualny, dlatego warto skonsultować się z adwokatem przed podjęciem decyzji.
          </p>
          <p className="font-semibold text-purple-900">
            Pamiętaj, że najlepszym sposobem uniknięcia problemów prawnych związanych z jazdą pod wpływem alkoholu jest całkowita abstynencja przed prowadzeniem pojazdu. Żadne procedury prawne nie zrekompensują potencjalnych zagrożeń dla życia i zdrowia uczestników ruchu drogowego.
          </p>
        </div>
      </article>
    </Layout>
  );
};

export default DobrowolnePoddanieKarze;
