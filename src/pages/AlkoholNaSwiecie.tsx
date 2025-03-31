
import React from 'react';
import Layout from '@/components/Layout';

const AlkoholNaSwiecie = () => {
  return (
    <Layout 
      title="Dopuszczalna Zawartość Alkoholu na Świecie" 
      description="Porównanie limitów zawartości alkoholu we krwi kierowców w różnych krajach. Sprawdź gdzie obowiązuje zakaz, a gdzie są wyższe limity."
    >
      <article className="prose prose-purple max-w-none">
        <h2>Limity zawartości alkoholu we krwi kierowców na świecie</h2>
        <p>
          Przepisy dotyczące dopuszczalnej zawartości alkoholu we krwi kierowców różnią się znacząco w zależności od kraju. Poniżej przedstawiamy porównanie limitów obowiązujących w różnych częściach świata.
        </p>

        <h2>Europa</h2>
        <p>
          W Europie obowiązują zróżnicowane przepisy dotyczące jazdy pod wpływem alkoholu:
        </p>

        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-purple-100">
                <th className="border border-purple-300 px-4 py-2 text-left">Kraj</th>
                <th className="border border-purple-300 px-4 py-2 text-left">Dopuszczalny limit (‰)</th>
                <th className="border border-purple-300 px-4 py-2 text-left">Uwagi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-purple-300 px-4 py-2">Polska</td>
                <td className="border border-purple-300 px-4 py-2">0,2</td>
                <td className="border border-purple-300 px-4 py-2">Od 0,2‰ do 0,5‰ - wykroczenie, powyżej 0,5‰ - przestępstwo</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-purple-300 px-4 py-2">Niemcy</td>
                <td className="border border-purple-300 px-4 py-2">0,5</td>
                <td className="border border-purple-300 px-4 py-2">Dla kierowców w okresie próbnym i poniżej 21 lat - 0,0‰</td>
              </tr>
              <tr>
                <td className="border border-purple-300 px-4 py-2">Francja</td>
                <td className="border border-purple-300 px-4 py-2">0,5</td>
                <td className="border border-purple-300 px-4 py-2">Dla kierowców zawodowych i niedoświadczonych - 0,2‰</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-purple-300 px-4 py-2">Czechy</td>
                <td className="border border-purple-300 px-4 py-2">0,0</td>
                <td className="border border-purple-300 px-4 py-2">Całkowity zakaz</td>
              </tr>
              <tr>
                <td className="border border-purple-300 px-4 py-2">Wielka Brytania</td>
                <td className="border border-purple-300 px-4 py-2">0,8</td>
                <td className="border border-purple-300 px-4 py-2">Najwyższy limit w Europie (poza Szkocją, gdzie wynosi 0,5‰)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-purple-300 px-4 py-2">Włochy</td>
                <td className="border border-purple-300 px-4 py-2">0,5</td>
                <td className="border border-purple-300 px-4 py-2">Dla kierowców zawodowych i młodych - 0,0‰</td>
              </tr>
              <tr>
                <td className="border border-purple-300 px-4 py-2">Szwecja</td>
                <td className="border border-purple-300 px-4 py-2">0,2</td>
                <td className="border border-purple-300 px-4 py-2">Surowe kary</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-purple-300 px-4 py-2">Węgry</td>
                <td className="border border-purple-300 px-4 py-2">0,0</td>
                <td className="border border-purple-300 px-4 py-2">Całkowity zakaz</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Ameryka Północna</h2>

        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-purple-100">
                <th className="border border-purple-300 px-4 py-2 text-left">Kraj/Stan</th>
                <th className="border border-purple-300 px-4 py-2 text-left">Dopuszczalny limit (‰)</th>
                <th className="border border-purple-300 px-4 py-2 text-left">Uwagi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-purple-300 px-4 py-2">USA (większość stanów)</td>
                <td className="border border-purple-300 px-4 py-2">0,8</td>
                <td className="border border-purple-300 px-4 py-2">Niektóre stany mają limit 0,5‰</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-purple-300 px-4 py-2">Kanada</td>
                <td className="border border-purple-300 px-4 py-2">0,8</td>
                <td className="border border-purple-300 px-4 py-2">W niektórych prowincjach kary od 0,5‰</td>
              </tr>
              <tr>
                <td className="border border-purple-300 px-4 py-2">Meksyk</td>
                <td className="border border-purple-300 px-4 py-2">0,8</td>
                <td className="border border-purple-300 px-4 py-2">W niektórych stanach niższy</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Azja</h2>

        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-purple-100">
                <th className="border border-purple-300 px-4 py-2 text-left">Kraj</th>
                <th className="border border-purple-300 px-4 py-2 text-left">Dopuszczalny limit (‰)</th>
                <th className="border border-purple-300 px-4 py-2 text-left">Uwagi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-purple-300 px-4 py-2">Japonia</td>
                <td className="border border-purple-300 px-4 py-2">0,3</td>
                <td className="border border-purple-300 px-4 py-2">Bardzo surowe kary</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-purple-300 px-4 py-2">Chiny</td>
                <td className="border border-purple-300 px-4 py-2">0,2</td>
                <td className="border border-purple-300 px-4 py-2">Powyżej 0,8‰ - przestępstwo kryminalne</td>
              </tr>
              <tr>
                <td className="border border-purple-300 px-4 py-2">Tajlandia</td>
                <td className="border border-purple-300 px-4 py-2">0,5</td>
                <td className="border border-purple-300 px-4 py-2">Surowo egzekwowane</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-purple-300 px-4 py-2">Arabia Saudyjska</td>
                <td className="border border-purple-300 px-4 py-2">0,0</td>
                <td className="border border-purple-300 px-4 py-2">Całkowity zakaz alkoholu w kraju</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Australia i Oceania</h2>

        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-purple-100">
                <th className="border border-purple-300 px-4 py-2 text-left">Kraj</th>
                <th className="border border-purple-300 px-4 py-2 text-left">Dopuszczalny limit (‰)</th>
                <th className="border border-purple-300 px-4 py-2 text-left">Uwagi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-purple-300 px-4 py-2">Australia</td>
                <td className="border border-purple-300 px-4 py-2">0,5</td>
                <td className="border border-purple-300 px-4 py-2">Dla nowych i zawodowych kierowców - 0,0‰</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-purple-300 px-4 py-2">Nowa Zelandia</td>
                <td className="border border-purple-300 px-4 py-2">0,5</td>
                <td className="border border-purple-300 px-4 py-2">Dla kierowców poniżej 20 roku życia - 0,0‰</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Kraje o całkowitym zakazie prowadzenia po spożyciu alkoholu (0,0‰)</h2>
        <p>
          W wielu krajach obowiązuje zero tolerancji dla alkoholu u kierowców:
        </p>
        <ul>
          <li>Czechy</li>
          <li>Węgry</li>
          <li>Rumunia</li>
          <li>Słowacja</li>
          <li>Rosja</li>
          <li>Arabia Saudyjska</li>
          <li>Zjednoczone Emiraty Arabskie</li>
          <li>Brazylia</li>
          <li>Paragwaj</li>
        </ul>

        <h2>Praktyczne wskazówki dla polskich kierowców wyjeżdżających za granicę</h2>
        <p>
          Polscy kierowcy podróżujący za granicę powinni pamiętać o kilku ważnych kwestiach:
        </p>
        <ul>
          <li>Przed wyjazdem sprawdź dokładnie przepisy dotyczące jazdy pod wpływem alkoholu w kraju docelowym</li>
          <li>Pamiętaj, że nawet jeśli limit jest wyższy niż w Polsce, najlepiej nie pić wcale przed jazdą</li>
          <li>W wielu krajach kary są znacznie surowsze niż w Polsce</li>
          <li>Kontrole trzeźwości są powszechne, szczególnie w okresach świątecznych i wakacyjnych</li>
          <li>Konsekwencje jazdy pod wpływem alkoholu za granicą mogą obejmować nie tylko grzywny, ale także areszt i konieczność powrotu do kraju w późniejszym terminie</li>
        </ul>

        <h2>Podsumowanie</h2>
        <p>
          Przepisy dotyczące dopuszczalnej zawartości alkoholu we krwi kierowców różnią się znacząco w zależności od kraju. Trendem światowym jest zaostrzanie przepisów i obniżanie dopuszczalnych limitów. Najbezpieczniej jest przyjąć zasadę, że jeśli planujesz prowadzić pojazd, nie powinieneś spożywać alkoholu w ogóle, niezależnie od lokalnych przepisów.
        </p>
      </article>
    </Layout>
  );
};

export default AlkoholNaSwiecie;
