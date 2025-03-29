
import React, { useState } from 'react';
import AlcoholCalculatorForm from '@/components/AlcoholCalculatorForm';
import AlcoholResults from '@/components/AlcoholResults';
import { AlcoholFormData, calculateAlcoholResults, CalculationResult } from '@/utils/alcoholCalculations';

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
    <div className="min-h-screen bg-purple-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-purple-800 mb-2">
            Wirtualny Alkomat ONLINE
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sprawdź, kiedy będziesz mógł bezpiecznie prowadzić pojazd po spożyciu alkoholu. 
            Pamiętaj, że to tylko kalkulacja orientacyjna.
          </p>
        </header>

        <div className="max-w-3xl mx-auto">
          {showForm ? (
            <AlcoholCalculatorForm onCalculate={handleCalculate} />
          ) : (
            result && <AlcoholResults result={result} onRecalculate={handleRecalculate} />
          )}
        </div>
        
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>© 2023 Wirtualny Alkomat ONLINE. To narzędzie ma charakter orientacyjny.</p>
          <p className="mt-2">
            Nie należy traktować wyliczeń jako dokładnych. 
            Nigdy nie prowadź pojazdu po spożyciu alkoholu.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
