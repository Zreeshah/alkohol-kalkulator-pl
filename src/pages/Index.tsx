
import React, { useState } from 'react';
import AlcoholCalculatorForm from '@/components/AlcoholCalculatorForm';
import AlcoholResults from '@/components/AlcoholResults';
import Layout from '@/components/Layout';
import HomePageContent from '@/components/HomePageContent';
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
      title="Wirtualny Alkomat Online – Oblicz Promile w Kilka Chwil!"
      description="Sprawdź poziom alkoholu we krwi za pomocą naszego kalkulatora online. Poznaj czas potrzebny do wytrzeźwienia i podejmuj świadome decyzje."
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

export default Index;
