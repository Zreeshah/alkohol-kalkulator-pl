
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ArrowDown } from 'lucide-react';

const Artykul178a = () => {
  return (
    <Layout 
      title="Artykuł 178a KK - Konsekwencje Jazdy po Alkoholu" 
      description="Poznaj konsekwencje jazdy po alkoholu według art. 178a Kodeksu Karnego. Dowiedz się o karach, zakazach i procedurach po zatrzymaniu."
    >
      <article className="prose prose-purple max-w-none">
        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Artykuł 178a Kodeksu Karnego - przepisy i interpretacja</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Artykuł 178a Kodeksu Karnego to jeden z najczęściej stosowanych przepisów dotyczących przestępstw drogowych w Polsce. Reguluje on odpowiedzialność karną za prowadzenie pojazdu w stanie nietrzeźwości lub pod wpływem środka odurzającego.
        </p>

        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Treść przepisu</h2>
        <Card className="mb-8 bg-purple-50 border-purple-200">
          <CardContent className="pt-6">
            <p className="font-semibold text-purple-900">Art. 178a § 1 KK:</p>
            <p className="my-3 pl-4 border-l-4 border-purple-300 italic">
              "Kto, znajdując się w stanie nietrzeźwości lub pod wpływem środka odurzającego, prowadzi pojazd mechaniczny w ruchu lądowym, wodnym lub powietrznym, podlega grzywnie, karze ograniczenia wolności albo pozbawienia wolności do lat 2."
            </p>
            <p className="font-semibold text-purple-900 mt-6">Art. 178a § 4 KK:</p>
            <p className="my-3 pl-4 border-l-4 border-purple-300 italic">
              "Jeżeli sprawca czynu określonego w § 1 był wcześniej prawomocnie skazany za prowadzenie pojazdu mechanicznego w stanie nietrzeźwości lub pod wpływem środka odurzającego albo za przestępstwo określone w art. 173, 174, 177 lub art. 355 § 2 popełnione w stanie nietrzeźwości lub pod wpływem środka odurzającego albo dopuścił się czynu określonego w § 1 w okresie obowiązywania zakazu prowadzenia pojazdów mechanicznych orzeczonego w związku ze skazaniem za przestępstwo, podlega karze pozbawienia wolności od 3 miesięcy do lat 5."
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Kluczowe definicje</h2>
        
        <h3 className="text-xl font-bold text-purple-700 mb-4">Stan nietrzeźwości</h3>
        <p className="mb-4 leading-relaxed">
          Zgodnie z art. 115 § 16 Kodeksu Karnego, stan nietrzeźwości zachodzi, gdy:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li className="leading-relaxed">Zawartość alkoholu we krwi przekracza 0,5 promila (0,5‰)</li>
          <li className="leading-relaxed">Prowadzi to do stężenia przekraczającego tę wartość, lub</li>
          <li className="leading-relaxed">Zawartość alkoholu w 1 dm³ wydychanego powietrza przekracza 0,25 mg</li>
        </ul>
        <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-300 mb-6">
          <p className="text-blue-800">
            Należy pamiętać, że stan nietrzeźwości (powyżej 0,5‰) stanowi przestępstwo, natomiast stan po użyciu alkoholu (od 0,2‰ do 0,5‰) jest wykroczeniem określonym w art. 87 Kodeksu Wykroczeń.
          </p>
        </div>
        
        <h3 className="text-xl font-bold text-purple-700 mb-4">Środek odurzający</h3>
        <p className="mb-6 leading-relaxed">
          Pojęcie "środka odurzającego" obejmuje narkotyki, niektóre leki psychotropowe i inne substancje, które mogą wpływać na zdolność prowadzenia pojazdu. W przeciwieństwie do alkoholu, dla środków odurzających nie określono prawnie dopuszczalnego stężenia - każda wykryta ilość może stanowić podstawę do odpowiedzialności karnej.
        </p>
        
        <h3 className="text-xl font-bold text-purple-700 mb-4">Pojazd mechaniczny</h3>
        <p className="mb-4 leading-relaxed">
          Przepis dotyczy prowadzenia pojazdu mechanicznego, czyli:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li className="leading-relaxed">Samochodu</li>
          <li className="leading-relaxed">Motocykla</li>
          <li className="leading-relaxed">Ciężarówki</li>
          <li className="leading-relaxed">Autobusu</li>
          <li className="leading-relaxed">Pojazdu szynowego</li>
          <li className="leading-relaxed">Statku wodnego z napędem mechanicznym</li>
          <li className="leading-relaxed">Statku powietrznego</li>
        </ul>
        <div className="bg-amber-50 p-4 rounded-md border-l-4 border-amber-300 mb-8">
          <p className="text-amber-800">
            Warto zaznaczyć, że jazda rowerem czy hulajnogą elektryczną pod wpływem alkoholu kwalifikowana jest jako wykroczenie z art. 87 Kodeksu Wykroczeń, a nie przestępstwo z art. 178a KK.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Kary przewidziane w art. 178a KK</h2>
        <p className="mb-4 leading-relaxed">
          Za prowadzenie pojazdu w stanie nietrzeźwości grożą następujące kary:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li className="leading-relaxed">Grzywna (zazwyczaj od kilku do kilkunastu tysięcy złotych)</li>
          <li className="leading-relaxed">Kara ograniczenia wolności (najczęściej w formie prac społecznych)</li>
          <li className="leading-relaxed">Kara pozbawienia wolności do 2 lat</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          Dodatkowo sąd obligatoryjnie orzeka:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li className="leading-relaxed font-semibold">Zakaz prowadzenia pojazdów (na okres od 3 do 15 lat)</li>
          <li className="leading-relaxed font-semibold">Świadczenie pieniężne na rzecz Funduszu Pomocy Pokrzywdzonym oraz Pomocy Postpenitencjarnej (minimum 5000 zł)</li>
        </ul>
        
        <Collapsible className="mb-8">
          <CollapsibleTrigger className="flex items-center gap-2 w-full p-3 bg-purple-100 text-purple-800 font-semibold rounded-md">
            <ArrowDown size={16} />
            <span>Zaostrzony wymiar kary w przypadku recydywy</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 pt-6 border border-t-0 border-purple-100 rounded-b-md">
            <p className="mb-4 leading-relaxed">
              W przypadku recydywy (§ 4), czyli gdy sprawca był wcześniej prawomocnie skazany za podobne przestępstwo lub popełnił czyn w okresie obowiązywania zakazu prowadzenia pojazdów, kara jest surowsza:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li className="leading-relaxed">Kara pozbawienia wolności od 3 miesięcy do 5 lat</li>
              <li className="leading-relaxed">Dożywotni zakaz prowadzenia pojazdów (możliwy)</li>
              <li className="leading-relaxed">Wyższe świadczenie pieniężne</li>
            </ul>
          </CollapsibleContent>
        </Collapsible>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Praktyczne aspekty związane z art. 178a KK</h2>
            
            <h3 className="text-xl font-bold text-purple-700 mb-4">Kontrola trzeźwości</h3>
            <p className="mb-4 leading-relaxed">
              Policja może przeprowadzić kontrolę trzeźwości kierowcy:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="leading-relaxed">W ramach rutynowej kontroli drogowej</li>
              <li className="leading-relaxed">W przypadku podejrzenia, że kierowca jest nietrzeźwy</li>
              <li className="leading-relaxed">W ramach zorganizowanych akcji kontroli trzeźwości</li>
              <li className="leading-relaxed">Po kolizji lub wypadku drogowym</li>
            </ul>
            <p className="mb-6 leading-relaxed font-semibold text-red-700">
              Odmowa poddania się badaniu trzeźwości skutkuje tymi samymi konsekwencjami, co prowadzenie pojazdu w stanie nietrzeźwości.
            </p>
            
            <h3 className="text-xl font-bold text-purple-700 mb-4">Procedura po zatrzymaniu</h3>
            <p className="mb-4 leading-relaxed">
              Jeśli kierowca zostanie zatrzymany za jazdę pod wpływem alkoholu:
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-3">
              <li className="leading-relaxed">Policja przeprowadza badanie alkomatem</li>
              <li className="leading-relaxed">W razie wyniku pozytywnego, kierowca może żądać badania krwi</li>
              <li className="leading-relaxed">Prawo jazdy jest zatrzymywane na miejscu</li>
              <li className="leading-relaxed">Pojazd może zostać odholowany na koszt kierowcy</li>
              <li className="leading-relaxed">Kierowca może zostać zatrzymany do wytrzeźwienia</li>
              <li className="leading-relaxed">Sprawa trafia do prokuratury, która kieruje akt oskarżenia do sądu</li>
            </ol>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Mediacje i dobrowolne poddanie się karze</h2>
        <p className="mb-4 leading-relaxed">
          W sprawach o przestępstwo z art. 178a KK możliwe jest:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li className="leading-relaxed">Dobrowolne poddanie się karze (art. 335 KPK)</li>
          <li className="leading-relaxed">Skazanie bez rozprawy (art. 387 KPK)</li>
        </ul>
        <p className="mb-8 leading-relaxed">
          Te procedury pozwalają na szybsze zakończenie sprawy, często z łagodniejszym wymiarem kary.
        </p>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Statystyki i społeczne znaczenie art. 178a KK</h2>
          <p className="mb-4 leading-relaxed">
            Przestępstwo z art. 178a KK jest jednym z najczęściej popełnianych przestępstw w Polsce:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="leading-relaxed">Rocznie policja zatrzymuje kilkadziesiąt tysięcy nietrzeźwych kierowców</li>
            <li className="leading-relaxed">Około 20% wypadków drogowych ze skutkiem śmiertelnym jest spowodowanych przez nietrzeźwych kierowców</li>
            <li className="leading-relaxed">Sprawy z art. 178a KK stanowią znaczny odsetek wszystkich spraw karnych w sądach</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Najczęstsze pytania</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold text-purple-800 mb-4">Co to jest kara za prowadzenie pojazdu pod wpływem alkoholu zgodnie z artykułem 178a § 1 Kodeksu Karnego?</h3>
          <p className="pl-4 border-l-4 border-purple-300 py-2 leading-relaxed">
            Za prowadzenie pojazdu pod wpływem alkoholu przewidziana jest grzywna, kara ograniczenia wolności lub pozbawienia wolności do 2 lat, zakaz prowadzenia pojazdów od 3 do 15 lat oraz świadczenie pieniężne na Fundusz Pomocy Pokrzywdzonym w wysokości od 5.000 do 60.000 zł.
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold text-purple-800 mb-4">Czy kierowca może zachować prawo jazdy mimo popełnienia przestępstwa z artykułu 178a § 1 Kodeksu Karnego?</h3>
          <p className="pl-4 border-l-4 border-purple-300 py-2 leading-relaxed">
            W wyjątkowych przypadkach sąd może nie orzec zakazu prowadzenia pojazdów, jeśli zastosuje wobec sprawcy instytucję warunkowego umorzenia postępowania karnego. Jest to jedyna sytuacja, w której kierowca może zachować prawo jazdy mimo jazdy pod wpływem alkoholu.
          </p>
        </div>

        <div className="bg-purple-100 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Podsumowanie</h2>
          <p className="mb-4 leading-relaxed">
            Artykuł 178a Kodeksu Karnego jest kluczowym przepisem w walce z problemem prowadzenia pojazdów pod wpływem alkoholu lub innych środków odurzających. Przewiduje surowe kary, szczególnie dla recydywistów. Najważniejszym aspektem tego przepisu jest jednak jego funkcja prewencyjna - ma on odstraszać potencjalnych sprawców i przyczyniać się do zwiększenia bezpieczeństwa w ruchu drogowym.
          </p>
          <p className="font-semibold text-purple-900">
            Pamiętajmy, że nawet najmniejsza ilość alkoholu wpływa na zdolność prowadzenia pojazdu, zwiększając ryzyko wypadku. Dlatego zawsze warto stosować zasadę "piłeś - nie jedź", niezależnie od tego, czy ilość spożytego alkoholu przekracza prawne limity.
          </p>
        </div>
      </article>
    </Layout>
  );
};

export default Artykul178a;
