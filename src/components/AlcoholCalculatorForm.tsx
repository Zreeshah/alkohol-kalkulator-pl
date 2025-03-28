
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { CalendarIcon, User, ArrowUp, Wine, Beer, Clock, Calculator } from "lucide-react";
import { TimePickerDemo } from "./TimePickerDemo";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { AlcoholFormData } from '@/utils/alcoholCalculations';

interface AlcoholCalculatorFormProps {
  onCalculate: (data: AlcoholFormData) => void;
}

export default function AlcoholCalculatorForm({ onCalculate }: AlcoholCalculatorFormProps) {
  const today = new Date();
  
  const [formData, setFormData] = useState<AlcoholFormData>({
    gender: 'male',
    height: 175,
    weight: 75,
    age: 30,
    bodyType: 'normal',
    largeBeer: 0,
    smallBeer: 0,
    wineGlass: 0,
    champagneGlass: 0,
    spiritShot: 0,
    foodIntake: 'standard',
    metabolismRate: 'normal',
    startTime: new Date(today.setHours(today.getHours() - 3)),
    endTime: new Date(),
  });

  const handleChange = (name: keyof AlcoholFormData, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleStartDateChange = (date: Date | undefined) => {
    if (date) {
      const newDate = new Date(date);
      newDate.setHours(formData.startTime.getHours());
      newDate.setMinutes(formData.startTime.getMinutes());
      handleChange('startTime', newDate);
    }
  };

  const handleEndDateChange = (date: Date | undefined) => {
    if (date) {
      const newDate = new Date(date);
      newDate.setHours(formData.endTime.getHours());
      newDate.setMinutes(formData.endTime.getMinutes());
      handleChange('endTime', newDate);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(formData);
  };

  return (
    <Card className="w-full animate-fade-in">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
            Kalkulator Alkoholowy
          </h2>
          
          {/* Personal Data Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 pb-2 border-b border-gray-200">
              <User className="text-purple-500" /> 
              Twoje dane
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="gender" className="input-label">Płeć</Label>
                <Select 
                  value={formData.gender} 
                  onValueChange={(value) => handleChange('gender', value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Wybierz płeć" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Mężczyzna</SelectItem>
                    <SelectItem value="female">Kobieta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="bodyType" className="input-label">Sylwetka</Label>
                <Select 
                  value={formData.bodyType} 
                  onValueChange={(value) => handleChange('bodyType', value as 'slim' | 'normal' | 'stocky')}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Wybierz sylwetkę" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="slim">Szczupła</SelectItem>
                    <SelectItem value="normal">Normalna</SelectItem>
                    <SelectItem value="stocky">Krępa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between">
                  <Label htmlFor="height" className="input-label">Wzrost: {formData.height} cm</Label>
                </div>
                <Slider
                  id="height"
                  min={140}
                  max={220}
                  step={1}
                  value={[formData.height]}
                  onValueChange={(value) => handleChange('height', value[0])}
                  className="my-2"
                />
              </div>
              
              <div>
                <div className="flex justify-between">
                  <Label htmlFor="weight" className="input-label">Waga: {formData.weight} kg</Label>
                </div>
                <Slider
                  id="weight"
                  min={40}
                  max={200}
                  step={1}
                  value={[formData.weight]}
                  onValueChange={(value) => handleChange('weight', value[0])}
                  className="my-2"
                />
              </div>
              
              <div>
                <div className="flex justify-between">
                  <Label htmlFor="age" className="input-label">Wiek: {formData.age} lat</Label>
                </div>
                <Slider
                  id="age"
                  min={18}
                  max={99}
                  step={1}
                  value={[formData.age]}
                  onValueChange={(value) => handleChange('age', value[0])}
                  className="my-2"
                />
              </div>
            </div>
          </div>
          
          {/* Alcohol Consumption Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 pb-2 border-b border-gray-200">
              <Beer className="text-purple-500" /> 
              Spożyte napoje
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="largeBeer" className="input-label">Piwo duże (500ml)</Label>
                <Input 
                  type="number" 
                  id="largeBeer" 
                  min="0"
                  value={formData.largeBeer}
                  onChange={(e) => handleChange('largeBeer', parseInt(e.target.value) || 0)}
                />
              </div>
              
              <div>
                <Label htmlFor="smallBeer" className="input-label">Piwo małe (330ml)</Label>
                <Input 
                  type="number" 
                  id="smallBeer" 
                  min="0"
                  value={formData.smallBeer}
                  onChange={(e) => handleChange('smallBeer', parseInt(e.target.value) || 0)}
                />
              </div>
              
              <div>
                <Label htmlFor="wineGlass" className="input-label">Wino kieliszek (175ml)</Label>
                <Input 
                  type="number" 
                  id="wineGlass" 
                  min="0"
                  value={formData.wineGlass}
                  onChange={(e) => handleChange('wineGlass', parseInt(e.target.value) || 0)}
                />
              </div>
              
              <div>
                <Label htmlFor="champagneGlass" className="input-label">Szampan kieliszek (120ml)</Label>
                <Input 
                  type="number" 
                  id="champagneGlass" 
                  min="0"
                  value={formData.champagneGlass}
                  onChange={(e) => handleChange('champagneGlass', parseInt(e.target.value) || 0)}
                />
              </div>
              
              <div>
                <Label htmlFor="spiritShot" className="input-label">Mocny alkohol (50ml)</Label>
                <Input 
                  type="number" 
                  id="spiritShot" 
                  min="0"
                  value={formData.spiritShot}
                  onChange={(e) => handleChange('spiritShot', parseInt(e.target.value) || 0)}
                />
              </div>
            </div>
          </div>
          
          {/* Additional Factors Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 pb-2 border-b border-gray-200">
              <Clock className="text-purple-500" /> 
              Dodatkowe czynniki
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="foodIntake" className="input-label">W trakcie spożywanego alkoholu jadłeś</Label>
                <Select 
                  value={formData.foodIntake} 
                  onValueChange={(value) => handleChange('foodIntake', value as 'none' | 'little' | 'standard' | 'much')}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Wybierz" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Nie jadłem</SelectItem>
                    <SelectItem value="little">Mało</SelectItem>
                    <SelectItem value="standard">Standardowo</SelectItem>
                    <SelectItem value="much">Dużo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="metabolismRate" className="input-label">Tempo metabolizmu</Label>
                <Select 
                  value={formData.metabolismRate} 
                  onValueChange={(value) => handleChange('metabolismRate', value as 'slow' | 'normal' | 'fast')}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Wybierz" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="slow">Wolne</SelectItem>
                    <SelectItem value="normal">Normalne</SelectItem>
                    <SelectItem value="fast">Szybkie</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="input-label">Rozpoczęcie spożycia</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !formData.startTime && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.startTime ? (
                          format(formData.startTime, "yyyy-MM-dd", { locale: pl })
                        ) : (
                          <span>Wybierz datę</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.startTime}
                        onSelect={handleStartDateChange}
                        initialFocus
                        className="rounded-md pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                  
                  <TimePickerDemo 
                    date={formData.startTime} 
                    setDate={(date) => handleChange('startTime', date)} 
                  />
                </div>
              </div>
              
              <div>
                <Label className="input-label">Zakończenie spożycia</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !formData.endTime && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.endTime ? (
                          format(formData.endTime, "yyyy-MM-dd", { locale: pl })
                        ) : (
                          <span>Wybierz datę</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.endTime}
                        onSelect={handleEndDateChange}
                        initialFocus
                        className="rounded-md pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                  
                  <TimePickerDemo 
                    date={formData.endTime} 
                    setDate={(date) => handleChange('endTime', date)} 
                  />
                </div>
              </div>
            </div>
          </div>
          
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
            <Calculator className="mr-2 h-5 w-5" />
            Oblicz
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
