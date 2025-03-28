
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { User, ArrowUp, Wine, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalculationResult, formatDateTime, formatPromille } from '@/utils/alcoholCalculations';
import RecoveryTimeline from './RecoveryTimeline';

interface AlcoholResultsProps {
  result: CalculationResult;
  onRecalculate: () => void;
}

export default function AlcoholResults({ result, onRecalculate }: AlcoholResultsProps) {
  if (!result) return null;
  
  const { 
    totalAlcoholGrams, 
    startingPromille, 
    soberTime, 
    bodyWaterKg,
    bodyWaterPercentage,
    timePoints,
    isDriving
  } = result;
  
  return (
    <div className="space-y-6 animate-fade-in">
      <Card className={`${isDriving ? 'bg-danger-50 border-danger-200' : 'bg-success-50 border-success-200'}`}>
        <CardContent className="p-6 text-center">
          {isDriving ? (
            <>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-danger flex items-center justify-center">
                  <span className="text-3xl text-white">!</span>
                </div>
              </div>
              <div className="mb-4">
                <Car className="w-16 h-16 mx-auto" />
              </div>
              <h2 className="text-2xl font-bold mb-3">STOP! Nie wsiadaj za kierownicę!</h2>
              <p className="text-lg">
                Z obliczeń wynika, że nie możesz jeszcze prowadzić pojazdów 
                mechanicznych, nie jesteś jeszcze trzeźwy/a! Zaczekaj do momentu, 
                gdy wytrzeźwiejesz!
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-3">Jesteś trzeźwy!</h2>
              <p className="text-lg">
                Według naszych obliczeń, poziom alkoholu w twojej krwi jest poniżej
                dopuszczalnego progu 0.2‰.
              </p>
            </>
          )}
        </CardContent>
      </Card>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Twoje dane</h2>
        
        <div className="result-row">
          <div className="result-icon">
            <User size={24} />
          </div>
          <div>
            <span>mężczyzna w wieku {45} lat</span>
          </div>
        </div>
        
        <div className="result-row">
          <div className="result-icon">
            <ArrowUp size={24} />
          </div>
          <div>
            <span>o wzroście {180} cm</span>
          </div>
        </div>
        
        <div className="result-row">
          <div className="result-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
              <path d="M18 2L17.2 3.6C16.5 5 15 6 13.5 6H10.5C9 6 7.5 5 6.8 3.6L6 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.05 9.7L17.2 17.7C17.1 19 16 20 14.7 20H9.3C8 20 6.9 19 6.8 17.7L5.95 9.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.75 9.5H18.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.5 13.5L14.5 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <span>i wadze {92} kg</span>
          </div>
        </div>
        
        <div className="result-row">
          <div className="result-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
              <circle cx="12" cy="5" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <span>oraz budowie normalnej</span>
            <div className="text-gray-500 text-sm">
              (waga płynów ustrojowych to ok. {bodyWaterKg.toFixed(2)} kg ({bodyWaterPercentage.toFixed(2)}%))
            </div>
          </div>
        </div>
        
        <div className="result-row">
          <div className="result-icon">
            <Wine size={24} />
          </div>
          <div>
            <span>spożył ok. {totalAlcoholGrams.toFixed(2)} g alkoholu.</span>
          </div>
        </div>
      </div>
      
      <RecoveryTimeline 
        timePoints={timePoints} 
        drivingThreshold={result.drivingThreshold} 
      />
      
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Alkomat wyliczył, że wytrzeźwiejesz o {formatDateTime(soberTime)}
        </h2>
        
        <p className="mb-4">Poniżej znajdują się zawartości promili w odstępach czasowych:</p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b text-left">Czas</th>
                <th className="py-2 px-4 border-b text-right">Ilość [g]</th>
                <th className="py-2 px-4 border-b text-right">Zawartość [‰]</th>
              </tr>
            </thead>
            <tbody>
              {timePoints.map((point, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="py-2 px-4 border-b">{formatDateTime(point.time)}</td>
                  <td className="py-2 px-4 border-b text-right">{point.alcoholGrams.toFixed(2)}</td>
                  <td className="py-2 px-4 border-b text-right">{formatPromille(point.promille)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 text-center">
          <Button 
            onClick={onRecalculate} 
            className="bg-purple-600 hover:bg-purple-700"
          >
            Przelicz ponownie
          </Button>
        </div>
      </div>
    </div>
  );
}
