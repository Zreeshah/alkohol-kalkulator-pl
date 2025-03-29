
import React from 'react';
import Layout from '@/components/Layout';

const BlokadaAlkoholowa = () => {
  return (
    <Layout 
      title="Blokada alkoholowa (alkoblokada)" 
      description="Dowiedz się wszystkiego o blokadach alkoholowych, jak działają i jakie przepisy ich dotyczą w Polsce."
    >
      <article className="prose prose-purple max-w-none">
        <h2>Czym jest blokada alkoholowa?</h2>
        <p>
          Blokada alkoholowa (alkoblokada) to urządzenie, które uniemożliwia uruchomienie pojazdu osobie będącej pod wpływem alkoholu. System składa się z analizatora oddechu połączonego z układem zapłonowym samochodu. Aby uruchomić silnik, kierowca musi najpierw dmuchnąć w ustnik urządzenia. Jeśli zostanie wykryta obecność alkoholu powyżej ustalonego limitu, pojazd nie odpali.
        </p>

        <h2>Kiedy stosuje się blokadę alkoholową w Polsce?</h2>
        <p>
          W Polsce blokady alkoholowe mogą być stosowane w ramach programów profilaktycznych lub jako środek karny wobec osób skazanych za prowadzenie pojazdu pod wpływem alkoholu. Sąd może orzec obowiązek prowadzenia pojazdu wyposażonego w blokadę alkoholową zamiast całkowitego zakazu prowadzenia pojazdów.
        </p>

        <h3>Przepisy prawne dotyczące alkoblokad</h3>
        <p>
          Zgodnie z przepisami Kodeksu karnego oraz ustawy Prawo o ruchu drogowym, sąd może orzec wobec sprawcy przestępstwa prowadzenia pojazdu w stanie nietrzeźwości obowiązek prowadzenia wyłącznie pojazdów wyposażonych w blokadę alkoholową. Dotyczy to osób, które:
        </p>
        <ul>
          <li>Zostały skazane za prowadzenie pojazdu w stanie nietrzeźwości</li>
          <li>Mają orzeczony środek karny w postaci zakazu prowadzenia pojazdów</li>
          <li>Miały stężenie alkoholu we krwi od 0,5 do 1,5 promila</li>
        </ul>

        <h2>Zalety stosowania blokad alkoholowych</h2>
        <p>
          Alkoblokady mają szereg zalet zarówno dla kierowców, jak i dla ogólnego bezpieczeństwa na drogach:
        </p>
        <ul>
          <li>Zmniejszają ryzyko recydywy wśród kierowców zatrzymanych za jazdę pod wpływem alkoholu</li>
          <li>Pozwalają osobom z wyrokiem za jazdę po alkoholu na zachowanie mobilności</li>
          <li>Zwiększają ogólne bezpieczeństwo na drogach</li>
          <li>Mają walor edukacyjny i prewencyjny</li>
        </ul>

        <h2>Koszty instalacji i użytkowania</h2>
        <p>
          Koszt instalacji blokady alkoholowej w Polsce waha się od 2500 do 4000 złotych. Dodatkowo należy uwzględnić koszty okresowej kalibracji urządzenia (co 6-12 miesięcy) oraz ewentualne opłaty za przechowywanie danych. Osoba skazana ponosi wszystkie koszty związane z instalacją i obsługą urządzenia.
        </p>

        <h2>Podsumowanie</h2>
        <p>
          Blokady alkoholowe stanowią skuteczne narzędzie w walce z problemem prowadzenia pojazdów pod wpływem alkoholu. Umożliwiają one osobom skazanym za jazdę pod wpływem alkoholu zachowanie mobilności, jednocześnie zapewniając, że nie będą prowadzić pojazdu po spożyciu alkoholu. Choć wiążą się z kosztami dla kierowcy, to stanowią alternatywę dla całkowitego zakazu prowadzenia pojazdów.
        </p>
      </article>
    </Layout>
  );
};

export default BlokadaAlkoholowa;
