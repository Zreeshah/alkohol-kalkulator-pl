
import React, { useState } from 'react';
import AlcoholCalculatorForm from '@/components/AlcoholCalculatorForm';
import AlcoholResults from '@/components/AlcoholResults';
import Layout from '@/components/Layout';
import { AlcoholFormData, calculateAlcoholResults, CalculationResult } from '@/utils/alcoholCalculations';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showForm, setShowForm] = useState(true);

  const handleCalculate = (data: AlcoholFormData) => {
    const calculationResult = calculateAlcoholResults(data);
    setResult(calculationResult);
    setShowForm(false);
  };

  const handleRecalculate = () => {
    setShowForm(true);
  };

  return (
    <Layout 
      title="Uzupełnij dane, aby obliczyć, czy możesz prowadzić samochód." 
      description="Sprawdź, kiedy będziesz mógł bezpiecznie prowadzić pojazd po spożyciu alkoholu. Pamiętaj, że to tylko kalkulacja orientacyjna."
    >
      <div className="mb-12">
        {showForm ? (
          <AlcoholCalculatorForm onCalculate={handleCalculate} />
        ) : (
          result && <AlcoholResults result={result} onRecalculate={handleRecalculate} />
        )}
      </div>
      
      <HomePageContent />
    </Layout>
  );
};

const HomePageContent = () => {
  return (
    <div className="space-y-10 mt-12">
      <section>
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Wirtualny Alkomat Online – Oblicz Promile w Kilka Chwil!</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Chcesz wiedzieć, ile promili alkoholu znajduje się w Twoim organizmie po wypiciu piwa, wina czy mocniejszego trunku? <em>Wirtualny alkomat online</em> to darmowe i wygodne narzędzie, które pomoże Ci oszacować zawartość alkoholu we krwi w dowolnym momencie. Niezależnie od tego, czy zastanawiasz się, <em>ile mogę wypić</em>, czy chcesz sprawdzić, kiedy wytrzeźwiejesz, nasz <em>kalkulator promili</em> dostarczy Ci przybliżonych wyników w zaledwie kilka minut.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Dostępny na stronie wirtualny-alkomat-online.pl <em>wirtualny alkomat</em> jest prosty w obsłudze i całkowicie bezpłatny. Wystarczy podać kilka kluczowych informacji, aby otrzymać szacunkowy wynik. Sprawdź, jak działa <em>najdokładniejszy alkomat online</em> i dowiedz się więcej o swoim organizmie!
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="bg-purple-200" />

      <section>
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Jak Działa Wirtualny Alkomat? Instrukcja Krok po Kroku</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Aby prawidłowo skorzystać z <em>kalkulatora alkoholu</em> i uzyskać wiarygodne wyniki, należy uzupełnić wszystkie wymagane pola w formularzu <em>wirtualnego alkomatu</em>. Oto dane, które musisz podać:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Płeć</strong> – mężczyźni i kobiety metabolizują alkohol w różnym tempie.</li>
              <li><strong>Wzrost</strong> – wpływa na proporcje ciała i rozkład alkoholu.</li>
              <li><strong>Waga</strong> – kluczowy czynnik przy obliczaniu promili.</li>
              <li><strong>Wiek</strong> – z wiekiem metabolizm może się zmieniać.</li>
              <li><strong>Typ sylwetki</strong> – szczupła, average czy muskularna?</li>
              <li><strong>Rodzaj spożytego alkoholu</strong> – piwo, wino, wódka czy inny napój.</li>
              <li><strong>Ilość spożytego alkoholu</strong> – podaj dokładnie, ile wypiłeś.</li>
              <li><strong>Ilość jedzenia</strong> – czy jadłeś dużo, mało, czy nic podczas picia?</li>
              <li><strong>Szybkość spalania alkoholu</strong> – indywidualna cecha organizmu.</li>
              <li><strong>Data i godzina rozpoczęcia picia</strong> – kiedy zacząłeś?</li>
              <li><strong>Data i godzina zakończenia picia</strong> – kiedy skończyłeś?</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Na podstawie tych informacji specjalny algorytm, działający jak precyzyjny <em>kalkulator promili</em>, obliczy szacunkową zawartość alkoholu w Twojej krwi oraz przybliżony czas potrzebny na wytrzeźwienie. Dzięki temu <em>wirtualny alkomat online</em> to nie tylko ciekawostka, ale też praktyczne narzędzie do analizy.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="bg-purple-200" />

      <section>
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Rodzaje Alkoholu w Kalkulatorze – Podaj, Co Wypiłeś</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              <em>Alkomat wirtualny</em> pozwala na wybór różnych rodzajów trunków, co zwiększa dokładność obliczeń. Wprowadź dane dotyczące spożytego alkoholu, a narzędzie przeliczy, jak długo Twój organizm będzie potrzebował, aby spalić promile. Oto przykładowe opcje:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Duże piwo</strong> (np. 500 ml),</li>
              <li><strong>Małe piwo</strong> (np. 330 ml),</li>
              <li><strong>Wino</strong> (kieliszek lub butelka),</li>
              <li><strong>Szampan</strong>,</li>
              <li><strong>Mocny alkohol</strong> (np. wódka, whisky),</li>
              <li><strong>Inne napoje alkoholowe</strong>.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Podając dokładne dane, otrzymasz bardziej precyzyjny wynik. Pamiętaj jednak, że <em>wirtualny alkomat online</em> dostarcza jedynie szacunkowych wartości i nie zastąpi profesjonalnego alkomatu dowodowego.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="bg-purple-200" />

      <section className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-amber-800 mb-4">Czy Wirtualny Alkomat Jest Dokładny? Ważne Ostrzeżenie</h2>
        <div className="text-amber-700 leading-relaxed">
          <p className="mb-4">
            Mimo że nasz <em>najdokładniejszy alkomat online</em> został zaprojektowany z dbałością o szczegóły, wyniki mają charakter orientacyjny. Każdy organizm metabolizuje alkohol w indywidualnym tempie – zależy to od wielu czynników, takich jak genetyka, kondycja fizyczna czy stan zdrowia. Dlatego nie traktuj wyniku <em>kalkulatora alkoholu</em> jako ostatecznego wyznacznika trzeźwości.
          </p>
          <p>
            Nawet jeśli czujesz się dobrze następnego dnia po imprezie, Twój organizm może nadal przetwarzać alkohol. <em>Wirtualny alkomat</em> nie jest narzędziem dowodowym i nie powinien być podstawą do podejmowania decyzji, np. o prowadzeniu samochodu. W takich przypadkach zawsze używaj certyfikowanego alkomatu lub skonsultuj się z profesjonalistą.
          </p>
        </div>
      </section>

      <Separator className="bg-purple-200" />

      <section>
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Dlaczego Warto Skorzystać z Wirtualnego Alkomatu Online?</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              <em>Wirtualny alkomat</em> to świetny sposób, aby lepiej zrozumieć, jak Twój organizm reaguje na alkohol. Dzięki niemu dowiesz się:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Jak długo spalasz alkohol po wypiciu określonej ilości trunków,</li>
              <li>Kiedy możesz spodziewać się pełnej trzeźwości,</li>
              <li>Jak różne czynniki (np. jedzenie) wpływają na poziom promili.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To także doskonałe narzędzie edukacyjne dla osób, które chcą świadomie kontrolować spożycie alkoholu i uniknąć nieprzyjemnych niespodzianek. Zastanawiasz się, <em>ile mogę wypić</em> na spotkaniu ze znajomymi? Sprawdź to z wyprzedzeniem dzięki <em>kalkulatorowi promili</em>!
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="bg-purple-200" />

      <section>
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Gdzie Kupić Prawdziwy Alkomat?</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-gray-700 leading-relaxed">
              Jeśli zależy Ci na stuprocentowej pewności, polecamy zakup profesjonalnego alkomatu osobistego lub dowodowego. Takie urządzenia znajdziesz w specjalistycznych sklepach z elektroniką lub sprzętem medycznym. Wybieraj modele z atestami, aby mieć gwarancję dokładnych pomiarów.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="bg-purple-200" />

      <section className="bg-purple-100 border border-purple-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Podsumowanie – Sprawdź Się z Wirtualnym Alkomatem!</h2>
        <div className="text-gray-700 leading-relaxed">
          <p className="mb-4">
            <em>Wirtualny alkomat online</em> na wirtualny-alkomat-online.pl to szybki, darmowy i łatwy sposób na oszacowanie poziomu alkoholu w organizmie. Niezależnie od tego, czy pijesz piwo, wino czy coś mocniejszego, nasz <em>kalkulator alkoholu</em> pomoże Ci lepiej zrozumieć proces trzeźwienia. Pamiętaj jednak, by traktować wyniki jako wskazówkę, a nie pewnik.
          </p>
          <p>
            Życzymy udanej zabawy i odpowiedzialnego korzystania z <em>wirtualnego alkomatu</em>! Sprawdź, jak działa, i baw się dobrze, odkrywając tajniki metabolizmu alkoholu.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
