
import React from 'react';
import Layout from '@/components/Layout';

const KontrolaPolicji = () => {
  return (
    <Layout 
      title="Kontrola Trzeźwości - Prawa i Obowiązki" 
      description="Jak zachować się podczas kontroli trzeźwości? Poznaj swoje prawa, obowiązki i procedury policyjne podczas badania alkomatem."
    >
      <article className="prose prose-purple max-w-none">
        <h2>Podstawowe zasady podczas kontroli drogowej</h2>
        <p>
          Kontrola drogowa, w tym badanie trzeźwości, jest stresującym doświadczeniem dla wielu kierowców. Niezależnie od tego, czy spożywałeś alkohol czy nie, warto znać właściwe zasady zachowania, które pomogą przejść przez kontrolę sprawnie i zgodnie z prawem.
        </p>

        <h2>Zatrzymanie do kontroli</h2>
        
        <h3>Jak rozpoznać prawomocne zatrzymanie?</h3>
        <p>
          Policjant może zatrzymać pojazd do kontroli:
        </p>
        <ul>
          <li>W umundurowaniu, dając sygnał do zatrzymania tarczą lub ręką</li>
          <li>W radiowozie oznakowanym, używając sygnałów świetlnych i dźwiękowych</li>
          <li>W nieoznakowanym radiowozie, używając sygnałów świetlnych i dźwiękowych oraz pokazując legitymację służbową</li>
        </ul>
        
        <h3>Pierwsze chwile po zatrzymaniu</h3>
        <ol>
          <li>Zatrzymaj pojazd w bezpiecznym miejscu, jak najbliżej prawej krawędzi jezdni</li>
          <li>Wyłącz silnik i włącz światła awaryjne</li>
          <li>Pozostań w pojeździe, trzymając ręce na kierownicy (chyba że policjant poprosi o opuszczenie pojazdu)</li>
          <li>Opuść szybę, aby umożliwić komunikację</li>
          <li>Przygotuj dokumenty (prawo jazdy, dowód rejestracyjny, OC), ale nie wyjmuj ich, dopóki policjant o to nie poprosi</li>
        </ol>

        <h2>Kontrola trzeźwości</h2>
        
        <h3>Badanie alkomatem</h3>
        <p>
          Podczas rutynowej kontroli lub w ramach specjalnych akcji policjant może przeprowadzić badanie trzeźwości:
        </p>
        <ol>
          <li>Policjant powinien poinformować o zamiarze przeprowadzenia badania</li>
          <li>Przed badaniem warto poinformować policjanta, jeśli:
            <ul>
              <li>Spożywałeś alkohol w ciągu ostatnich 30 minut (wtedy badanie powinno być odroczone)</li>
              <li>Cierpisz na choroby mogące wpływać na wynik (np. cukrzyca, astma)</li>
              <li>Używałeś płynów do płukania jamy ustnej zawierających alkohol</li>
            </ul>
          </li>
          <li>Podczas badania:
            <ul>
              <li>Weź głęboki wdech i wydmuchaj powietrze jednym, długim wydechem</li>
              <li>Kontynuuj wydech do momentu sygnału dźwiękowego</li>
              <li>Nie przerywaj wydechu przedwcześnie</li>
            </ul>
          </li>
        </ol>
        
        <h3>Wynik negatywny</h3>
        <p>
          Jeśli wynik badania jest negatywny (0,0‰ lub poniżej 0,2‰):
        </p>
        <ul>
          <li>Policjant powinien poinformować o tym fakcie</li>
          <li>Kontrola zostaje zakończona lub kontynuowana w innym zakresie</li>
          <li>Możesz kontynuować jazdę</li>
        </ul>
        
        <h3>Wynik pozytywny</h3>
        <p>
          Jeśli wynik badania wskazuje na obecność alkoholu (0,2‰ lub więcej):
        </p>
        <ul>
          <li>Zachowaj spokój i współpracuj z policjantem</li>
          <li>Zostaniesz poddany drugiemu badaniu alkomatem dowodowym</li>
          <li>Masz prawo zażądać badania krwi (na własny koszt, zwracany jeśli wynik okaże się negatywny)</li>
          <li>Nie argumentuj i nie przekonuj policjanta, że "czujesz się trzeźwy" - liczy się wynik badania, nie subiektywne odczucia</li>
        </ul>

        <h2>Prawa i obowiązki kierowcy podczas kontroli</h2>
        
        <h3>Twoje prawa:</h3>
        <ul>
          <li>Prawo do weryfikacji tożsamości policjanta (możesz poprosić o okazanie legitymacji służbowej)</li>
          <li>Prawo do informacji o przyczynie kontroli</li>
          <li>Prawo do sprawdzenia, czy alkomat ma ważne świadectwo legalizacji</li>
          <li>Prawo do żądania użycia jednorazowego, nowego ustnika</li>
          <li>Prawo do żądania badania krwi (na własny koszt, zwracany przy wyniku negatywnym)</li>
          <li>Prawo do otrzymania wydruku z wynikiem badania (przy alkomatach dowodowych)</li>
          <li>Prawo do odmowy podpisania protokołu, jeśli się z nim nie zgadzasz</li>
        </ul>
        
        <h3>Twoje obowiązki:</h3>
        <ul>
          <li>Obowiązek zatrzymania pojazdu na żądanie uprawnionego organu</li>
          <li>Obowiązek okazania wymaganych dokumentów</li>
          <li>Obowiązek poddania się badaniu trzeźwości (odmowa traktowana jest jak przyznanie się do prowadzenia pojazdu w stanie nietrzeźwości)</li>
          <li>Obowiązek stosowania się do poleceń policjanta</li>
          <li>Obowiązek zachowania spokoju i nie utrudniania czynności służbowych</li>
        </ul>

        <h2>Co robić w szczególnych sytuacjach?</h2>
        
        <h3>Gdy jesteś trzeźwy, ale alkomat pokazuje wynik pozytywny:</h3>
        <ol>
          <li>Zachowaj spokój i nie wdawaj się w kłótnie</li>
          <li>Poproś o drugie badanie alkomatem dowodowym</li>
          <li>Zażądaj badania krwi</li>
          <li>Jeśli to możliwe, poproś o odnotowanie okoliczności, które mogły wpłynąć na wynik (np. choroby, leki)</li>
          <li>Nie podpisuj protokołu, jeśli się z nim nie zgadzasz - zaznacz powód odmowy</li>
        </ol>
        
        <h3>Gdy odmówisz badania alkomatem:</h3>
        <p>
          Pamiętaj, że odmowa badania:
        </p>
        <ul>
          <li>Jest traktowana jak przyznanie się do prowadzenia pojazdu w stanie nietrzeźwości</li>
          <li>Skutkuje zatrzymaniem prawa jazdy</li>
          <li>Może skutkować przymusowym badaniem krwi</li>
          <li>Podlega takim samym sankcjom jak jazda w stanie nietrzeźwości</li>
        </ul>
        <p>
          Jedynym uzasadnionym powodem odmowy może być stan zdrowia uniemożliwiający przeprowadzenie badania wydychanym powietrzem.
        </p>
        
        <h3>Gdy jesteś po spożyciu alkoholu:</h3>
        <ol>
          <li>Nie zaprzeczaj i nie kłam - to tylko pogarsza sytuację</li>
          <li>Zachowaj spokój i współpracuj z policjantem</li>
          <li>Nie próbuj przekonywać, że "wypiłeś tylko jedno piwo" lub "czujesz się dobrze"</li>
          <li>Przyjmij konsekwencje swojego postępowania</li>
          <li>Nie wsiadaj za kierownicę po spożyciu alkoholu, nawet jeśli wydaje ci się, że jesteś trzeźwy</li>
        </ol>

        <h2>Konsekwencje jazdy po alkoholu</h2>
        <p>
          Warto przypomnieć, że jazda po alkoholu wiąże się z poważnymi konsekwencjami:
        </p>
        
        <h3>Stan po użyciu alkoholu (0,2‰ - 0,5‰):</h3>
        <ul>
          <li>Wykroczenie zagrożone aresztem lub grzywną</li>
          <li>Zakaz prowadzenia pojazdów od 6 miesięcy do 3 lat</li>
          <li>Od 10 do 15 punktów karnych</li>
        </ul>
        
        <h3>Stan nietrzeźwości (powyżej 0,5‰):</h3>
        <ul>
          <li>Przestępstwo zagrożone grzywną, karą ograniczenia wolności lub pozbawienia wolności do lat 2</li>
          <li>Zakaz prowadzenia pojazdów od 1 roku do 15 lat</li>
          <li>Świadczenie pieniężne na Fundusz Pomocy Pokrzywdzonym (minimum 5000 zł)</li>
        </ul>

        <h2>Podsumowanie</h2>
        <p>
          Kontrola drogowa, w tym badanie trzeźwości, to rutynowa procedura, która może przebiec sprawnie, jeśli będziesz znał swoje prawa i obowiązki. Kluczowe zasady to: zachowanie spokoju, współpraca z policjantem, znajomość procedury oraz świadomość swoich praw.
        </p>
        <p>
          Pamiętaj jednak, że najlepszym sposobem na uniknięcie problemów związanych z kontrolą trzeźwości jest całkowita abstynencja przed prowadzeniem pojazdu. Żadne okoliczności nie usprawiedliwiają decyzji o prowadzeniu samochodu po spożyciu alkoholu.
        </p>
      </article>
    </Layout>
  );
};

export default KontrolaPolicji;
