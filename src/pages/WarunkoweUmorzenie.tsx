
import React from 'react';
import Layout from '@/components/Layout';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from '@/components/ui/collapsible';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WarunkoweUmorzenie = () => {
  const [openSections, setOpenSections] = React.useState({
    definition: true,
    conditions: true,
    practical: false,
    procedure: false,
    obligations: false,
    consequences: false,
    resumption: false,
    benefits: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <Layout 
      title="Warunkowe Umorzenie - Jazda po Alkoholu" 
      description="Kiedy możliwe jest warunkowe umorzenie za jazdę po alkoholu? Poznaj warunki, konsekwencje i procedury sądowe związane z tym środkiem probacyjnym."
    >
      <div className="space-y-6">
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 flex items-start mb-6">
          <Info className="text-purple-700 mt-1 mr-3 flex-shrink-0" size={20} />
          <p className="text-sm text-purple-800">
            Warunkowe umorzenie postępowania to szczególna forma zakończenia sprawy karnej, która w określonych okolicznościach
            może zostać zastosowana w przypadkach jazdy pod wpływem alkoholu. Poniżej znajdziesz szczegółowe informacje dotyczące
            warunków, procedury i konsekwencji tego środka prawnego.
          </p>
        </div>

        {/* Sekcja 1: Definicja */}
        <Collapsible open={openSections.definition} onOpenChange={() => toggleSection('definition')}>
          <Card className="border-purple-100">
            <CardHeader className="bg-purple-50 border-b border-purple-100 py-3 px-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <CardTitle className="text-xl text-purple-800">Czym jest warunkowe umorzenie postępowania?</CardTitle>
                {openSections.definition ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </CollapsibleTrigger>
            </CardHeader>
            <CollapsibleContent>
              <CardContent className="pt-4">
                <p>
                  Warunkowe umorzenie postępowania to środek probacyjny przewidziany w polskim prawie karnym, który pozwala na umorzenie postępowania karnego mimo stwierdzenia, że oskarżony popełnił zarzucany mu czyn. Sąd, stosując warunkowe umorzenie, wyznacza okres próby (najczęściej od 1 do 3 lat), podczas którego sprawca musi spełnić określone warunki.
                </p>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Sekcja 2: Warunki */}
        <Collapsible open={openSections.conditions} onOpenChange={() => toggleSection('conditions')}>
          <Card className="border-purple-100">
            <CardHeader className="bg-purple-50 border-b border-purple-100 py-3 px-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <CardTitle className="text-xl text-purple-800">Kiedy możliwe jest warunkowe umorzenie za jazdę po alkoholu?</CardTitle>
                {openSections.conditions ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </CollapsibleTrigger>
            </CardHeader>
            <CollapsibleContent>
              <CardContent className="pt-4">
                <p className="mb-4">
                  Warunkowe umorzenie postępowania w przypadku jazdy pod wpływem alkoholu jest możliwe, gdy spełnione są łącznie następujące warunki:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Wina i społeczna szkodliwość czynu nie są znaczne</li>
                  <li>Okoliczności popełnienia czynu nie budzą wątpliwości</li>
                  <li>Sprawca nie był wcześniej karany za przestępstwo umyślne</li>
                  <li>Istnieje pozytywna prognoza kryminologiczna (uzasadnione przypuszczenie, że sprawca będzie przestrzegał porządku prawnego)</li>
                  <li>Przestępstwo jest zagrożone karą nieprzekraczającą 5 lat pozbawienia wolności</li>
                </ul>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Sekcja 3: Praktyczne przypadki */}
        <Collapsible open={openSections.practical} onOpenChange={() => toggleSection('practical')}>
          <Card className="border-purple-100">
            <CardHeader className="bg-purple-50 border-b border-purple-100 py-3 px-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <CardTitle className="text-xl text-purple-800">Praktyczne przypadki warunkowego umorzenia</CardTitle>
                {openSections.practical ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </CollapsibleTrigger>
            </CardHeader>
            <CollapsibleContent>
              <CardContent className="pt-4">
                <p className="mb-4">
                  W praktyce warunkowe umorzenie postępowania za jazdę po alkoholu jest stosunkowo rzadkie i dotyczy głównie przypadków, gdy:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Stężenie alkoholu było nieznacznie powyżej dopuszczalnej normy (zazwyczaj do 0,7-0,8 promila)</li>
                  <li>Sprawca nie spowodował wypadku ani kolizji</li>
                  <li>Sprawca nie był wcześniej karany, ma nienaganną opinię i stałe zatrudnienie</li>
                  <li>Istnieją inne okoliczności łagodzące, np. sytuacja rodzinna, zdrowotna</li>
                </ul>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Sekcja 4: Procedura */}
        <Collapsible open={openSections.procedure} onOpenChange={() => toggleSection('procedure')}>
          <Card className="border-purple-100">
            <CardHeader className="bg-purple-50 border-b border-purple-100 py-3 px-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <CardTitle className="text-xl text-purple-800">Procedura warunkowego umorzenia</CardTitle>
                {openSections.procedure ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </CollapsibleTrigger>
            </CardHeader>
            <CollapsibleContent>
              <CardContent className="pt-4">
                <p className="mb-4">
                  Warunkowe umorzenie może nastąpić:
                </p>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                  <li>Na wniosek prokuratora - już na etapie postępowania przygotowawczego</li>
                  <li>Z inicjatywy sądu - podczas rozprawy</li>
                  <li>Na wniosek oskarżonego - zazwyczaj za pośrednictwem obrońcy</li>
                </ol>
                <p>
                  Sąd, wydając postanowienie o warunkowym umorzeniu, określa długość okresu próby oraz nakłada na sprawcę określone obowiązki.
                </p>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Sekcja 5: Obowiązki */}
        <Collapsible open={openSections.obligations} onOpenChange={() => toggleSection('obligations')}>
          <Card className="border-purple-100">
            <CardHeader className="bg-purple-50 border-b border-purple-100 py-3 px-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <CardTitle className="text-xl text-purple-800">Obowiązki przy warunkowym umorzeniu za jazdę po alkoholu</CardTitle>
                {openSections.obligations ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </CollapsibleTrigger>
            </CardHeader>
            <CollapsibleContent>
              <CardContent className="pt-4">
                <p className="mb-4">
                  W przypadku warunkowego umorzenia za jazdę pod wpływem alkoholu sąd zazwyczaj nakłada na sprawcę następujące obowiązki:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Zakaz prowadzenia pojazdów mechanicznych (na okres od 6 miesięcy do 3 lat)</li>
                  <li>Świadczenie pieniężne na rzecz Funduszu Pomocy Pokrzywdzonym (od kilkuset do kilku tysięcy złotych)</li>
                  <li>Informowanie sądu lub kuratora o przebiegu okresu próby</li>
                  <li>Czasem także: poddanie się terapii uzależnień, powstrzymanie się od spożywania alkoholu lub wykonywanie pracy społecznej</li>
                </ul>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Sekcja 6: Konsekwencje */}
        <Collapsible open={openSections.consequences} onOpenChange={() => toggleSection('consequences')}>
          <Card className="border-purple-100">
            <CardHeader className="bg-purple-50 border-b border-purple-100 py-3 px-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <CardTitle className="text-xl text-purple-800">Konsekwencje warunkowego umorzenia</CardTitle>
                {openSections.consequences ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </CollapsibleTrigger>
            </CardHeader>
            <CollapsibleContent>
              <CardContent className="pt-4">
                <p className="mb-4">
                  Warunkowe umorzenie postępowania ma określone skutki prawne:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Nie jest wyrokiem skazującym - sprawca formalnie nie ma statusu osoby karanej</li>
                  <li>Nie figuruje w Krajowym Rejestrze Karnym jako wyrok skazujący</li>
                  <li>Mimo to, informacja o warunkowym umorzeniu jest odnotowywana w KRK przez okres próby i dodatkowe 6 miesięcy</li>
                  <li>Sprawca musi wykonać nałożone przez sąd obowiązki</li>
                  <li>W przypadku naruszenia warunków próby, sąd może podjąć postępowanie</li>
                </ul>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Sekcja 7: Podjęcie postępowania */}
        <Collapsible open={openSections.resumption} onOpenChange={() => toggleSection('resumption')}>
          <Card className="border-purple-100">
            <CardHeader className="bg-purple-50 border-b border-purple-100 py-3 px-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <CardTitle className="text-xl text-purple-800">Podjęcie warunkowo umorzonego postępowania</CardTitle>
                {openSections.resumption ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </CollapsibleTrigger>
            </CardHeader>
            <CollapsibleContent>
              <CardContent className="pt-4">
                <p className="mb-4">
                  Sąd może podjąć warunkowo umorzone postępowanie, jeśli sprawca:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Rażąco narusza porządek prawny, w szczególności popełnił nowe przestępstwo</li>
                  <li>Uchyla się od wykonania nałożonych obowiązków</li>
                  <li>Rażąco narusza porządek prawny w inny sposób</li>
                </ul>
                <p className="mt-4">
                  Podjęcie postępowania oznacza powrót do normalnego trybu postępowania karnego, które może zakończyć się wyrokiem skazującym.
                </p>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Sekcja 8: Zalety */}
        <Collapsible open={openSections.benefits} onOpenChange={() => toggleSection('benefits')}>
          <Card className="border-purple-100">
            <CardHeader className="bg-purple-50 border-b border-purple-100 py-3 px-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <CardTitle className="text-xl text-purple-800">Zalety warunkowego umorzenia dla sprawcy</CardTitle>
                {openSections.benefits ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </CollapsibleTrigger>
            </CardHeader>
            <CollapsibleContent>
              <CardContent className="pt-4">
                <p className="mb-4">
                  Warunkowe umorzenie postępowania ma dla sprawcy jazdy po alkoholu następujące zalety:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Brak wyroku skazującego i statusu osoby karanej</li>
                  <li>Często łagodniejsze konsekwencje niż w przypadku wyroku skazującego</li>
                  <li>Mniejszy wpływ na przyszłe zatrudnienie i reputację</li>
                  <li>Możliwość uniknięcia wpisu do KRK po pomyślnym zakończeniu okresu próby</li>
                </ul>
                <p>
                  Warunkowe umorzenie postępowania to środek probacyjny, który może być stosowany wobec sprawców jazdy pod wpływem alkoholu w określonych okolicznościach. Choć nie jest to rozwiązanie często stosowane w takich przypadkach, może stanowić alternatywę dla wyroku skazującego dla sprawców spełniających określone warunki. Warto skonsultować się z adwokatem, aby ocenić szanse na zastosowanie tego środka w konkretnej sprawie.
                </p>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>
      </div>
    </Layout>
  );
};

export default WarunkoweUmorzenie;
