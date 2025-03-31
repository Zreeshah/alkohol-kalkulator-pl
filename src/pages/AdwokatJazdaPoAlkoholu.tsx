
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ArrowDown } from 'lucide-react';

const AdwokatJazdaPoAlkoholu = () => {
  return (
    <Layout 
      title="Adwokat przy Sprawie o Jazdę po Alkoholu" 
      description="Dowiedz się kiedy warto skorzystać z pomocy adwokata w sprawie o jazdę po alkoholu. Strategie obrony, koszty i najczęstsze pytania."
    >
      <article className="prose prose-purple max-w-none">
        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Kiedy warto skorzystać z pomocy adwokata?</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Jazda pod wpływem alkoholu wiąże się z poważnymi konsekwencjami prawnymi w Polsce. Niezależnie od tego, czy jest to wykroczenie (0,2‰-0,5‰ alkoholu we krwi) czy przestępstwo (powyżej 0,5‰), skorzystanie z pomocy doświadczonego adwokata może mieć znaczący wpływ na przebieg sprawy i jej ostateczny wynik.
        </p>

        <div className="bg-blue-50 p-6 rounded-md border-l-4 border-blue-300 mb-8">
          <h3 className="text-xl font-bold text-purple-700 mb-4">Sytuacje, w których pomoc adwokata jest szczególnie wskazana:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li className="leading-relaxed">Jesteś pierwszym sprawcą - nie masz doświadczenia z sądem i procedurami karnymi</li>
            <li className="leading-relaxed">Wynik badania jest bliski granicy między wykroczeniem a przestępstwem (okolice 0,5‰)</li>
            <li className="leading-relaxed">Spowodowałeś kolizję lub wypadek będąc pod wpływem alkoholu</li>
            <li className="leading-relaxed">Odmówiłeś poddania się badaniu alkomatem</li>
            <li className="leading-relaxed">Potrzebujesz prawa jazdy do pracy (chcesz ograniczyć okres zakazu prowadzenia pojazdów)</li>
            <li className="leading-relaxed">Jesteś recydywistą (wcześniej byłeś karany za jazdę pod wpływem alkoholu)</li>
            <li className="leading-relaxed">Masz wątpliwości co do prawidłowości przeprowadzonego badania</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Co może zrobić adwokat w sprawie o jazdę po alkoholu?</h2>
        <p className="mb-4 leading-relaxed">
          Adwokat specjalizujący się w sprawach o jazdę pod wpływem alkoholu może pomóc na wiele sposobów:
        </p>
        
        <Collapsible className="mb-8">
          <CollapsibleTrigger className="flex items-center gap-2 w-full p-3 bg-purple-100 text-purple-800 font-semibold rounded-md">
            <ArrowDown size={16} />
            <span>Na etapie postępowania przygotowawczego</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 pt-6 border border-t-0 border-purple-100 rounded-b-md">
            <ul className="list-disc pl-6 space-y-2">
              <li className="leading-relaxed">Analizuje prawidłowość przeprowadzonej kontroli i badania trzeźwości</li>
              <li className="leading-relaxed">Sprawdza, czy alkomat miał ważne świadectwo legalizacji</li>
              <li className="leading-relaxed">Weryfikuje, czy procedura badania została przeprowadzona prawidłowo</li>
              <li className="leading-relaxed">Doradza w kwestii składania wyjaśnień lub korzystania z prawa do odmowy</li>
              <li className="leading-relaxed">Negocjuje z prokuratorem możliwość dobrowolnego poddania się karze na korzystnych warunkach</li>
              <li className="leading-relaxed">Może wnioskować o warunkowe umorzenie postępowania (w szczególnych przypadkach)</li>
            </ul>
          </CollapsibleContent>
        </Collapsible>
        
        <Collapsible className="mb-8">
          <CollapsibleTrigger className="flex items-center gap-2 w-full p-3 bg-purple-100 text-purple-800 font-semibold rounded-md">
            <ArrowDown size={16} />
            <span>W postępowaniu sądowym</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 pt-6 border border-t-0 border-purple-100 rounded-b-md">
            <ul className="list-disc pl-6 space-y-2">
              <li className="leading-relaxed">Reprezentuje oskarżonego przed sądem</li>
              <li className="leading-relaxed">Przesłuchuje świadków, w tym funkcjonariuszy policji</li>
              <li className="leading-relaxed">Powołuje biegłych (np. w celu weryfikacji prawidłowości badania)</li>
              <li className="leading-relaxed">Przedstawia okoliczności łagodzące (np. nienaganną przeszłość, sytuację osobistą)</li>
              <li className="leading-relaxed">Dąży do złagodzenia kary, szczególnie w zakresie zakazu prowadzenia pojazdów</li>
              <li className="leading-relaxed">Wnioskuje o zastosowanie dobrodziejstw probacyjnych (np. warunkowe zawieszenie wykonania kary)</li>
            </ul>
          </CollapsibleContent>
        </Collapsible>
        
        <Collapsible className="mb-8">
          <CollapsibleTrigger className="flex items-center gap-2 w-full p-3 bg-purple-100 text-purple-800 font-semibold rounded-md">
            <ArrowDown size={16} />
            <span>Po wyroku</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 pt-6 border border-t-0 border-purple-100 rounded-b-md">
            <ul className="list-disc pl-6 space-y-2">
              <li className="leading-relaxed">Składa apelację, jeśli istnieją podstawy do zaskarżenia wyroku</li>
              <li className="leading-relaxed">Doradza w kwestii ubiegania się o wcześniejsze przywrócenie uprawnień</li>
              <li className="leading-relaxed">Pomaga w przygotowaniu dokumentów potrzebnych do odzyskania prawa jazdy</li>
            </ul>
          </CollapsibleContent>
        </Collapsible>

        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Strategie obrony w sprawach o jazdę po alkoholu</h2>
        <p className="mb-4 leading-relaxed">
          Doświadczony adwokat może zastosować różne strategie obrony, w zależności od okoliczności sprawy:
        </p>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold text-purple-700 mb-4">1. Kwestionowanie prawidłowości badania</h3>
            <p className="mb-3 leading-relaxed">
              Ta strategia polega na wykazaniu błędów proceduralnych lub technicznych, takich jak:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="leading-relaxed">Brak ważnego świadectwa legalizacji alkomatu</li>
              <li className="leading-relaxed">Nieprawidłowe przeprowadzenie badania (np. zbyt krótki czas między spożyciem alkoholu a badaniem)</li>
              <li className="leading-relaxed">Zbyt duża różnica między wynikami dwóch pomiarów</li>
              <li className="leading-relaxed">Wpływ czynników zewnętrznych na wynik (np. choroby, leki)</li>
            </ul>
            
            <h3 className="text-xl font-bold text-purple-700 mb-4">2. Dobrowolne poddanie się karze</h3>
            <p className="mb-3 leading-relaxed">
              Ta strategia polega na przyznaniu się do winy i negocjacji z prokuratorem łagodniejszego wymiaru kary:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="leading-relaxed">Krótszy zakaz prowadzenia pojazdów</li>
              <li className="leading-relaxed">Niższa grzywna</li>
              <li className="leading-relaxed">Kara ograniczenia wolności zamiast pozbawienia wolności</li>
              <li className="leading-relaxed">Warunkowe zawieszenie wykonania kary</li>
            </ul>
            
            <h3 className="text-xl font-bold text-purple-700 mb-4">3. Warunkowe umorzenie postępowania</h3>
            <p className="mb-3 leading-relaxed">
              W wyjątkowych przypadkach, gdy:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="leading-relaxed">Sprawca nie był wcześniej karany</li>
              <li className="leading-relaxed">Wina i społeczna szkodliwość czynu nie są znaczne</li>
              <li className="leading-relaxed">Stężenie alkoholu było nieznacznie powyżej dopuszczalnej normy</li>
              <li className="leading-relaxed">Istnieją szczególne okoliczności łagodzące</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Koszty pomocy prawnej w sprawach o jazdę po alkoholu</h2>
        <div className="bg-amber-50 p-6 rounded-md border-l-4 border-amber-300 mb-8">
          <p className="mb-3 leading-relaxed">
            Koszt skorzystania z usług adwokata w sprawie o jazdę pod wpływem alkoholu zależy od wielu czynników:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li className="leading-relaxed">Doświadczenie i renoma adwokata</li>
            <li className="leading-relaxed">Stopień skomplikowania sprawy</li>
            <li className="leading-relaxed">Region Polski (w dużych miastach stawki są zazwyczaj wyższe)</li>
            <li className="leading-relaxed">Zakres oczekiwanej pomocy (tylko doradztwo czy pełna reprezentacja)</li>
          </ul>
          
          <h3 className="text-xl font-bold text-purple-700 mb-4">Orientacyjne koszty:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li className="leading-relaxed">Konsultacja: 100-300 zł</li>
            <li className="leading-relaxed">Reprezentacja w sprawie o wykroczenie: 1000-3000 zł</li>
            <li className="leading-relaxed">Reprezentacja w sprawie o przestępstwo: 2000-5000 zł</li>
            <li className="leading-relaxed">Reprezentacja w bardziej skomplikowanych sprawach (np. wypadek po alkoholu): 5000-10000 zł i więcej</li>
          </ul>
          <p className="mt-3 leading-relaxed">
            Warto pamiętać, że inwestycja w doświadczonego adwokata może się zwrócić w postaci łagodniejszego wyroku, co może mieć znaczący wpływ na przyszłość zawodową i osobistą.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Jak wybrać odpowiedniego adwokata?</h2>
        <p className="mb-4 leading-relaxed">
          Wybór właściwego adwokata ma kluczowe znaczenie dla przebiegu sprawy. Oto kilka wskazówek:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li className="leading-relaxed">Szukaj adwokata specjalizującego się w sprawach o jazdę pod wpływem alkoholu lub prawie karnym drogowym</li>
          <li className="leading-relaxed">Sprawdź opinie i rekomendacje innych klientów</li>
          <li className="leading-relaxed">Umów się na wstępną konsultację, aby ocenić kompetencje i podejście adwokata</li>
          <li className="leading-relaxed">Zapytaj o doświadczenie w podobnych sprawach i osiągnięte wyniki</li>
          <li className="leading-relaxed">Upewnij się, że rozumiesz zasady rozliczenia i szacunkowe koszty</li>
          <li className="leading-relaxed">Oceń komunikatywność adwokata - powinieneś czuć się komfortowo w rozmowie i rozumieć jego wyjaśnienia</li>
        </ul>

        <h2 className="text-2xl font-bold text-purple-800 border-b border-purple-200 pb-2 mb-6">Najczęstsze pytania dotyczące pomocy adwokata</h2>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-purple-800 mb-4">Czy warto przyznać się do winy?</h3>
          <p className="pl-4 border-l-4 border-purple-300 py-2 leading-relaxed">
            Decyzja o przyznaniu się do winy powinna być podjęta po konsultacji z adwokatem. W niektórych przypadkach przyznanie się może prowadzić do łagodniejszego wyroku i szybszego zakończenia sprawy, ale nie zawsze jest to najlepsza strategia.
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold text-purple-800 mb-4">Czy adwokat może sprawić, że uniknę zakazu prowadzenia pojazdów?</h3>
          <p className="pl-4 border-l-4 border-purple-300 py-2 leading-relaxed">
            W przypadku stwierdzenia jazdy pod wpływem alkoholu zakaz prowadzenia pojazdów jest karą obligatoryjną, której nie można całkowicie uniknąć. Adwokat może jednak dążyć do minimalizacji okresu zakazu lub ograniczenia go do określonych kategorii pojazdów.
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Podsumowanie</h2>
          <p className="mb-4 leading-relaxed">
            Skorzystanie z pomocy doświadczonego adwokata w sprawie o jazdę pod wpływem alkoholu może mieć znaczący wpływ na przebieg postępowania i jego ostateczny wynik. Adwokat może pomóc w kwestionowaniu nieprawidłowości proceduralnych, negocjowaniu łagodniejszego wyroku lub minimalizowaniu długoterminowych konsekwencji.
          </p>
          <p className="font-semibold text-purple-900">
            Pamiętaj jednak, że najlepszym sposobem na uniknięcie problemów prawnych związanych z jazdą pod wpływem alkoholu jest całkowita abstynencja przed prowadzeniem pojazdu. Żadna, nawet najlepsza obrona prawna, nie zrekompensuje potencjalnych zagrożeń dla życia i zdrowia uczestników ruchu drogowego.
          </p>
        </div>
      </article>
    </Layout>
  );
};

export default AdwokatJazdaPoAlkoholu;
