
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ArrowDown } from 'lucide-react';

const WypadekPoAlkoholu = () => {
  return (
    <Layout 
      title="Spowodowanie wypadku pod wpływem alkoholu" 
      description="Jakie kary grożą za spowodowanie wypadku po alkoholu? Poznaj konsekwencje prawne, procedury sądowe i odpowiedzialność cywilną sprawcy."
    >
      <article className="prose prose-purple max-w-none">
        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Spowodowanie wypadku pod wpływem alkoholu - podstawy prawne</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Spowodowanie wypadku drogowego pod wpływem alkoholu jest w polskim prawie traktowane szczególnie surowo. Czyn taki stanowi kumulację dwóch przestępstw: spowodowania wypadku (art. 177 KK) oraz prowadzenia pojazdu w stanie nietrzeźwości (art. 178a KK), z zastosowaniem zaostrzenia odpowiedzialności na podstawie art. 178 KK.
        </p>

        <h3 className="text-xl font-bold text-purple-700 mb-4">Kluczowe przepisy</h3>
        <div className="bg-gray-100 p-4 rounded-md my-4">
          <p className="font-semibold">Art. 177 § 1 KK:</p>
          <p className="my-3 pl-4 border-l-4 border-purple-300 italic">
            "Kto, naruszając, chociażby nieumyślnie, zasady bezpieczeństwa w ruchu lądowym, wodnym lub powietrznym, powoduje nieumyślnie wypadek, w którym inna osoba odniosła obrażenia ciała, podlega karze pozbawienia wolności do lat 3."
          </p>
          <p className="font-semibold mt-4">Art. 177 § 2 KK:</p>
          <p className="my-3 pl-4 border-l-4 border-purple-300 italic">
            "Jeżeli następstwem wypadku jest śmierć innej osoby albo ciężki uszczerbek na jej zdrowiu, sprawca podlega karze pozbawienia wolności od 6 miesięcy do lat 8."
          </p>
          <p className="font-semibold mt-4">Art. 178 KK:</p>
          <p className="my-3 pl-4 border-l-4 border-purple-300 italic">
            "Jeżeli sprawca czynu określonego w art. 173, 174 lub 177 był w stanie nietrzeźwości lub pod wpływem środka odurzającego lub zbiegł z miejsca zdarzenia, sąd orzeka karę pozbawienia wolności w wysokości od dolnej granicy ustawowego zagrożenia zwiększonego o połowę, do górnej granicy tego zagrożenia zwiększonego o połowę."
          </p>
        </div>

        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Wymiar kary za spowodowanie wypadku pod wpływem alkoholu</h2>
        <p className="mb-4 leading-relaxed">
          Z uwagi na zastosowanie art. 178 KK, kary za spowodowanie wypadku pod wpływem alkoholu są znacznie surowsze:
        </p>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold text-purple-700 mb-4">Wypadek ze skutkiem w postaci lekkich obrażeń ciała</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="leading-relaxed">Standardowe zagrożenie: do 3 lat pozbawienia wolności</li>
              <li className="leading-relaxed">Ze zwiększeniem z art. 178 KK: od 1 roku i 6 miesięcy do 4 lat i 6 miesięcy pozbawienia wolności</li>
            </ul>
            
            <h3 className="text-xl font-bold text-purple-700 mb-4">Wypadek ze skutkiem śmiertelnym lub ciężkim uszczerbkiem na zdrowiu</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="leading-relaxed">Standardowe zagrożenie: od 6 miesięcy do 8 lat pozbawienia wolności</li>
              <li className="leading-relaxed">Ze zwiększeniem z art. 178 KK: od 1 roku do 12 lat pozbawienia wolności</li>
            </ul>
          </CardContent>
        </Card>

        <h3 className="text-xl font-bold text-purple-700 mb-4">Dodatkowe konsekwencje</h3>
        <p className="mb-4 leading-relaxed">
          Oprócz kary pozbawienia wolności, sprawca wypadku pod wpływem alkoholu musi liczyć się z:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li className="leading-relaxed">Długotrwałym lub dożywotnim zakazem prowadzenia pojazdów</li>
          <li className="leading-relaxed">Nawiązką na rzecz pokrzywdzonego lub jego rodziny (minimum 10 000 zł)</li>
          <li className="leading-relaxed">Świadczeniem pieniężnym na Fundusz Pomocy Pokrzywdzonym</li>
          <li className="leading-relaxed">Obowiązkiem naprawienia szkody w całości lub w części</li>
        </ul>

        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Procedura postępowania po wypadku spowodowanym pod wpływem alkoholu</h2>
        
        <Collapsible className="mb-8">
          <CollapsibleTrigger className="flex items-center gap-2 w-full p-3 bg-purple-100 text-purple-800 font-semibold rounded-md">
            <ArrowDown size={16} />
            <span>Czynności na miejscu zdarzenia</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 pt-6 border border-t-0 border-purple-100 rounded-b-md">
            <p className="mb-4 leading-relaxed">
              Po spowodowaniu wypadku pod wpływem alkoholu sprawca zazwyczaj przechodzi przez następującą procedurę:
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li className="leading-relaxed">Zatrzymanie na miejscu wypadku przez policję</li>
              <li className="leading-relaxed">Przeprowadzenie badania trzeźwości (alkomatem lub krwi)</li>
              <li className="leading-relaxed">Zatrzymanie prawa jazdy</li>
              <li className="leading-relaxed">Możliwe tymczasowe aresztowanie w poważniejszych przypadkach</li>
              <li className="leading-relaxed">Zabezpieczenie pojazdu jako dowodu w sprawie</li>
            </ol>
          </CollapsibleContent>
        </Collapsible>
        
        <h3 className="text-xl font-bold text-purple-700 mb-4">Postępowanie sądowe</h3>
        <p className="mb-4 leading-relaxed">
          Postępowanie w sprawach o wypadek drogowy spowodowany pod wpływem alkoholu przebiega następująco:
        </p>
        <ol className="list-decimal pl-6 mb-8 space-y-2">
          <li className="leading-relaxed">Dochodzenie prowadzone przez policję pod nadzorem prokuratury</li>
          <li className="leading-relaxed">Zarzuty przedstawiane są zazwyczaj z art. 177 w zw. z art. 178 KK</li>
          <li className="leading-relaxed">Sprawa rozpatrywana jest przez sąd rejonowy lub okręgowy (zależnie od wagi czynu)</li>
          <li className="leading-relaxed">Rzadko stosuje się warunkowe umorzenie postępowania czy zawieszenie wykonania kary</li>
        </ol>

        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Odpowiedzialność cywilna i odszkodowawcza</h2>
        <p className="mb-4 leading-relaxed">
          Oprócz odpowiedzialności karnej, sprawca wypadku pod wpływem alkoholu ponosi również pełną odpowiedzialność cywilną za wyrządzone szkody:
        </p>
        
        <div className="bg-blue-50 p-6 rounded-md border-l-4 border-blue-300 mb-8">
          <h3 className="text-xl font-bold text-purple-700 mb-4">Odszkodowanie</h3>
          <p className="mb-3 leading-relaxed">
            Pokrzywdzony lub jego rodzina mogą dochodzić:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="leading-relaxed">Odszkodowania za zniszczone mienie</li>
            <li className="leading-relaxed">Zadośćuczynienia za doznaną krzywdę</li>
            <li className="leading-relaxed">Renty (w przypadku utraty zdolności do pracy)</li>
            <li className="leading-relaxed">Zwrotu kosztów leczenia i rehabilitacji</li>
            <li className="leading-relaxed">Zwrotu kosztów pogrzebu (w przypadku śmierci ofiary)</li>
          </ul>
        </div>
        
        <h3 className="text-xl font-bold text-purple-700 mb-4">Rola ubezpieczenia OC</h3>
        <p className="mb-3 leading-relaxed">
          Warto wiedzieć, że:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li className="leading-relaxed">Ubezpieczyciel wypłaca odszkodowanie poszkodowanym mimo nietrzeźwości sprawcy</li>
          <li className="leading-relaxed">Ubezpieczyciel ma prawo regresu (żądania zwrotu wypłaconego odszkodowania) wobec sprawcy wypadku pod wpływem alkoholu</li>
          <li className="leading-relaxed">Sprawca musi więc liczyć się z tym, że ostatecznie i tak poniesie pełne koszty szkody</li>
        </ul>

        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Konsekwencje społeczne i osobiste</h2>
        <p className="mb-3 leading-relaxed">
          Spowodowanie wypadku pod wpływem alkoholu niesie ze sobą także dotkliwe konsekwencje społeczne i osobiste:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li className="leading-relaxed">Stygmatyzacja społeczna i wykluczenie</li>
          <li className="leading-relaxed">Problemy z zatrudnieniem (wpis do Krajowego Rejestru Karnego)</li>
          <li className="leading-relaxed">Trudności z uzyskaniem ubezpieczenia w przyszłości</li>
          <li className="leading-relaxed">Obciążenie psychiczne związane ze świadomością wyrządzonej krzywdy</li>
          <li className="leading-relaxed">Wysokie koszty finansowe (odszkodowania, kary, koszty sądowe)</li>
        </ul>

        <Card className="mb-8 bg-purple-50 border-purple-200">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Porady praktyczne</h2>
            
            <h3 className="text-xl font-bold text-purple-700 mb-4">Co robić, gdy spowodowało się wypadek będąc pod wpływem alkoholu</h3>
            <p className="mb-3 leading-relaxed">
              Jeśli znalazłeś się w takiej sytuacji:
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li className="leading-relaxed">Przede wszystkim udziel pomocy poszkodowanym</li>
              <li className="leading-relaxed">Nie uciekaj z miejsca zdarzenia - to dodatkowo zaostrza odpowiedzialność</li>
              <li className="leading-relaxed">Współpracuj z policją, ale korzystaj z prawa do odmowy składania wyjaśnień do czasu konsultacji z adwokatem</li>
              <li className="leading-relaxed">Jak najszybciej skontaktuj się z adwokatem specjalizującym się w sprawach karnych</li>
              <li className="leading-relaxed">Nie próbuj tłumaczyć się, że "nie czułeś działania alkoholu" - sądy rzadko uwzględniają takie argumenty</li>
            </ol>
            
            <h3 className="text-xl font-bold text-purple-700 mb-4">Obrona w sprawie o wypadek pod wpływem alkoholu</h3>
            <p className="mb-3 leading-relaxed">
              Możliwe strategie obrony mogą obejmować:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="leading-relaxed">Kwestionowanie związku przyczynowego między stanem nietrzeźwości a wypadkiem</li>
              <li className="leading-relaxed">Wskazywanie na przyczynienie się pokrzywdzonego</li>
              <li className="leading-relaxed">Powoływanie się na nadzwyczajne okoliczności (np. stan wyższej konieczności)</li>
              <li className="leading-relaxed">Negocjowanie dobrowolnego poddania się karze dla złagodzenia konsekwencji</li>
            </ul>
          </CardContent>
        </Card>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Podsumowanie</h2>
          <p className="mb-4 leading-relaxed">
            Spowodowanie wypadku pod wpływem alkoholu to jedno z najpoważniejszych przestępstw drogowych, które skutkuje surowymi karami i długotrwałymi konsekwencjami. Polski system prawny traktuje takie czyny ze szczególną surowością, mając na uwadze ich społeczną szkodliwość i zagrożenie, jakie stwarzają dla bezpieczeństwa w ruchu drogowym.
          </p>
          <p className="font-semibold text-purple-900">
            Najlepszą strategią jest oczywiście całkowita abstynencja przed prowadzeniem pojazdu. Żadne okoliczności nie usprawiedliwiają decyzji o prowadzeniu samochodu po spożyciu alkoholu, a konsekwencje takiego wyboru mogą być tragiczne zarówno dla sprawcy, jak i niewinnych uczestników ruchu drogowego.
          </p>
        </div>
      </article>
    </Layout>
  );
};

export default WypadekPoAlkoholu;
