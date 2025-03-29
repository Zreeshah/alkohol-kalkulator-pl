
import React, { useState } from 'react';
import AlcoholCalculatorForm from '@/components/AlcoholCalculatorForm';
import AlcoholResults from '@/components/AlcoholResults';
import Layout from '@/components/Layout';
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
    <Layout 
      title="Wirtualny Alkomat ONLINE" 
      description="Sprawdź, kiedy będziesz mógł bezpiecznie prowadzić pojazd po spożyciu alkoholu. Pamiętaj, że to tylko kalkulacja orientacyjna."
    >
      {showForm ? (
        <AlcoholCalculatorForm onCalculate={handleCalculate} />
      ) : (
        result && <AlcoholResults result={result} onRecalculate={handleRecalculate} />
      )}
    </Layout>
  );
};

export default Index;
