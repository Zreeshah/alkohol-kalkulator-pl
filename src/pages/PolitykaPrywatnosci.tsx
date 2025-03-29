
import React from 'react';
import Layout from '@/components/Layout';

const PolitykaPrywatnosci = () => {
  return (
    <Layout 
      title="Polityka Prywatności" 
      description="Polityka prywatności serwisu Wirtualny Alkomat ONLINE. Dowiedz się, jak przetwarzamy Twoje dane."
    >
      <article className="prose prose-purple max-w-none">
        <h2>Informacje ogólne</h2>
        <p>
          Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem z serwisu internetowego Wirtualny Alkomat ONLINE.
        </p>
        <p>
          Administratorem danych osobowych zawartych w serwisie jest Wirtualny Alkomat ONLINE z siedzibą w Polsce.
        </p>

        <h2>Dane osobowe</h2>
        <p>
          Administrator zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe.
        </p>
        <p>
          Dane podane w formularzu kontaktowym są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu dokonania procesu obsługi zapytania lub kontaktu handlowego.
        </p>
        <p>
          Administrator gwarantuje poufność wszelkich przekazanych mu danych osobowych.
        </p>

        <h2>Informacje w formularzach</h2>
        <p>
          Serwis zbiera informacje podane dobrowolnie przez użytkownika.
        </p>
        <p>
          Serwis może zapisać ponadto informacje o parametrach połączenia (oznaczenie czasu, adres IP).
        </p>
        <p>
          Dane w formularzu nie są udostępniane podmiotom trzecim, chyba że za zgodą użytkownika.
        </p>
        <p>
          Jeśli użytkownicy serwisu korzystają z kalkulatora alkoholowego, ich dane o spożyciu alkoholu, wadze, płci i innych parametrach nie są przechowywane po zakończeniu sesji i wykorzystywane są jedynie do jednorazowego obliczenia wyniku.
        </p>

        <h2>Informacja o plikach cookies</h2>
        <p>
          Serwis korzysta z plików cookies (tzw. „ciasteczka"), które stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika serwisu i przeznaczone są do korzystania ze stron internetowych serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.
        </p>
        <p>
          Pliki cookies wykorzystywane są w następujących celach:
        </p>
        <ul>
          <li>Dostosowania zawartości stron internetowych serwisu do preferencji Użytkownika</li>
          <li>Optymalizacji korzystania ze stron internetowych</li>
          <li>Tworzenia statystyk oglądalności</li>
          <li>Utrzymania sesji Użytkownika</li>
        </ul>
        <p>
          W wielu przypadkach oprogramowanie służące do przeglądania stron internetowych (przeglądarka internetowa) domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy serwisu mogą dokonać w każdym czasie zmiany ustawień dotyczących plików cookies. Ustawienia te mogą zostać zmienione w szczególności w taki sposób, aby blokować automatyczną obsługę plików cookies w ustawieniach przeglądarki internetowej bądź informować o ich każdorazowym zamieszczeniu w urządzeniu Użytkownika serwisu.
        </p>

        <h2>Logi serwera</h2>
        <p>
          Informacje o niektórych zachowaniach użytkowników podlegają logowaniu w warstwie serwerowej. Dane te są wykorzystywane wyłącznie w celu administrowania serwisem oraz w celu zapewnienia jak najbardziej sprawnej obsługi świadczonych usług hostingowych.
        </p>
        <p>
          Przeglądane zasoby identyfikowane są poprzez adresy URL. Ponadto zapisowi mogą podlegać:
        </p>
        <ul>
          <li>Czas nadejścia zapytania</li>
          <li>Czas wysłania odpowiedzi</li>
          <li>Nazwę stacji klienta – identyfikacja realizowana przez protokół HTTP</li>
          <li>Informacje o błędach jakie nastąpiły przy realizacji transakcji HTTP</li>
          <li>Adres URL strony poprzednio odwiedzanej przez użytkownika (referer link)</li>
          <li>Informacje o przeglądarce użytkownika</li>
          <li>Informacje o adresie IP</li>
        </ul>

        <h2>Udostępnienie danych</h2>
        <p>
          Dane podlegają udostępnieniu podmiotom zewnętrznym wyłącznie w granicach prawnie dozwolonych.
        </p>
        <p>
          Dane umożliwiające identyfikację osoby fizycznej są udostępniane wyłącznie za zgodą tej osoby.
        </p>
        <p>
          Administrator może mieć obowiązek udzielania informacji zebranych przez serwis upoważnionym organom na podstawie zgodnych z prawem żądań w zakresie wynikającym z żądania.
        </p>

        <h2>Prawa użytkowników</h2>
        <p>
          Użytkownicy mają prawo do:
        </p>
        <ul>
          <li>Dostępu do swoich danych oraz otrzymania ich kopii</li>
          <li>Sprostowania (poprawiania) swoich danych</li>
          <li>Usunięcia danych</li>
          <li>Ograniczenia przetwarzania danych</li>
          <li>Sprzeciwu wobec przetwarzania danych</li>
          <li>Przenoszenia danych</li>
          <li>Wniesienia skargi do organu nadzorczego</li>
        </ul>

        <h2>Zmiany w polityce prywatności</h2>
        <p>
          Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności. Każdą osobę korzystającą z serwisu obowiązuje aktualna Polityka Prywatności.
        </p>
        <p>
          Data ostatniej modyfikacji: 1 kwietnia 2023 r.
        </p>

        <h2>Kontakt</h2>
        <p>
          W przypadku pytań lub wątpliwości dotyczących Polityki Prywatności, prosimy o kontakt za pośrednictwem formularza kontaktowego dostępnego na stronie lub bezpośrednio na adres email: kontakt@wirtualnyalkomat.pl
        </p>
      </article>
    </Layout>
  );
};

export default PolitykaPrywatnosci;
