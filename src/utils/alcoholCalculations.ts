
// Constants for alcohol content calculations
const LARGE_BEER_ALCOHOL_G = 20; // 500ml of 5% beer
const SMALL_BEER_ALCOHOL_G = 13.2; // 330ml of 5% beer
const WINE_GLASS_ALCOHOL_G = 14; // 175ml of 10% wine
const CHAMPAGNE_GLASS_ALCOHOL_G = 10.8; // 120ml of 11% champagne
const SPIRIT_SHOT_ALCOHOL_G = 16; // 50ml of 40% spirit

// Metabolism rate in g/hour based on gender and body type
const METABOLISM_RATE = {
  male: {
    slim: 8.5,
    normal: 10,
    stocky: 11.5,
  },
  female: {
    slim: 7,
    normal: 8.5,
    stocky: 10,
  },
};

// Adjustment factors for metabolism tempo
const METABOLISM_TEMPO_FACTOR = {
  slow: 0.85,
  normal: 1,
  fast: 1.15,
};

// Adjustment factors for food intake
const FOOD_INTAKE_FACTOR = {
  none: 1,
  little: 0.9,
  standard: 0.8,
  much: 0.7,
};

// Weight distribution factor based on gender
const BODY_WATER_FACTOR = {
  male: 0.68,
  female: 0.55,
};

export interface AlcoholFormData {
  gender: 'male' | 'female';
  height: number;
  weight: number;
  age: number;
  bodyType: 'slim' | 'normal' | 'stocky';
  largeBeer: number;
  smallBeer: number;
  wineGlass: number;
  champagneGlass: number;
  spiritShot: number;
  foodIntake: 'none' | 'little' | 'standard' | 'much';
  metabolismRate: 'slow' | 'normal' | 'fast';
  startTime: Date;
  endTime: Date;
}

export interface TimePoint {
  time: Date;
  alcoholGrams: number;
  promille: number;
}

export interface CalculationResult {
  totalAlcoholGrams: number;
  startingPromille: number;
  soberTime: Date;
  bodyWaterKg: number;
  bodyWaterPercentage: number;
  timePoints: TimePoint[];
  isDriving: boolean;
  drivingThreshold: number;
}

export const calculateAlcoholResults = (data: AlcoholFormData): CalculationResult => {
  // Calculate total alcohol consumed
  const totalAlcoholGrams = 
    data.largeBeer * LARGE_BEER_ALCOHOL_G +
    data.smallBeer * SMALL_BEER_ALCOHOL_G +
    data.wineGlass * WINE_GLASS_ALCOHOL_G +
    data.champagneGlass * CHAMPAGNE_GLASS_ALCOHOL_G +
    data.spiritShot * SPIRIT_SHOT_ALCOHOL_G;
  
  // Calculate body water (in kg)
  const bodyWaterPercentage = BODY_WATER_FACTOR[data.gender];
  const bodyWaterKg = data.weight * bodyWaterPercentage;
  
  // Calculate initial promille (BAC)
  const initialPromille = totalAlcoholGrams / (bodyWaterKg * 10);
  
  // Adjusted metabolism rate based on gender, body type, metabolism tempo and food intake
  const baseMetabolismRate = METABOLISM_RATE[data.gender][data.bodyType];
  const adjustedMetabolismRate = 
    baseMetabolismRate * 
    METABOLISM_TEMPO_FACTOR[data.metabolismRate] * 
    FOOD_INTAKE_FACTOR[data.foodIntake];
  
  // Calculate time to metabolize all alcohol
  const metabolizeHours = totalAlcoholGrams / adjustedMetabolismRate;
  
  // Calculate sober time
  const drinkingDurationMs = data.endTime.getTime() - data.startTime.getTime();
  const drinkingDurationHours = drinkingDurationMs / (1000 * 60 * 60);
  
  // If drinking takes longer than metabolism time, some alcohol is already processed
  const effectiveMetabolizeHours = Math.max(0, metabolizeHours - drinkingDurationHours);
  
  const soberTimeMs = data.endTime.getTime() + (effectiveMetabolizeHours * 60 * 60 * 1000);
  const soberTime = new Date(soberTimeMs);
  
  // Generate time points for graph and table
  const timePoints: TimePoint[] = [];
  
  // Assume alcohol is consumed evenly throughout the drinking period
  const alcoholPerHour = totalAlcoholGrams / (drinkingDurationHours || 1);
  const metabolismRatePerHour = adjustedMetabolismRate;
  
  // Calculate alcohol level at the end of drinking period
  let alcoholLeft = totalAlcoholGrams - (drinkingDurationHours * metabolismRatePerHour);
  alcoholLeft = Math.max(0, alcoholLeft);
  
  const promilleAtEnd = alcoholLeft / (bodyWaterKg * 10);
  
  // Add end of drinking as first point
  timePoints.push({
    time: new Date(data.endTime),
    alcoholGrams: alcoholLeft,
    promille: promilleAtEnd
  });
  
  // Add points every 15 minutes until sober
  let currentTime = new Date(data.endTime.getTime() + 15 * 60 * 1000);
  while (currentTime.getTime() < soberTime.getTime()) {
    const hoursPassed = (currentTime.getTime() - data.endTime.getTime()) / (1000 * 60 * 60);
    const alcoholMetabolized = hoursPassed * metabolismRatePerHour;
    
    let remainingAlcohol = alcoholLeft - alcoholMetabolized;
    remainingAlcohol = Math.max(0, remainingAlcohol);
    
    const promille = remainingAlcohol / (bodyWaterKg * 10);
    
    timePoints.push({
      time: new Date(currentTime),
      alcoholGrams: remainingAlcohol,
      promille: promille
    });
    
    // Add 15 more minutes
    currentTime = new Date(currentTime.getTime() + 15 * 60 * 1000);
  }
  
  // Add final sober point
  timePoints.push({
    time: new Date(soberTime),
    alcoholGrams: 0,
    promille: 0
  });
  
  // In Poland, the driving limit is 0.2 promille
  const drivingThreshold = 0.2;
  
  return {
    totalAlcoholGrams,
    startingPromille: promilleAtEnd,
    soberTime,
    bodyWaterKg,
    bodyWaterPercentage: bodyWaterPercentage * 100,
    timePoints,
    isDriving: promilleAtEnd > drivingThreshold,
    drivingThreshold
  };
};

export const formatPromille = (promille: number): string => {
  return promille.toFixed(2) + "‰";
};

export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('pl-PL', { 
    hour: '2-digit', 
    minute: '2-digit'
  });
};

export const formatDateTime = (date: Date): string => {
  return date.toLocaleDateString('pl-PL', { 
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }) + ' ' + formatTime(date);
};

export const formatTimeInterval = (hours: number): string => {
  const h = Math.floor(hours);
  const m = Math.round((hours - h) * 60);
  
  return `${h}h ${m}min`;
};
