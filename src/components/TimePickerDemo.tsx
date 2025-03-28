
import * as React from "react";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { Clock } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

interface TimePickerDemoProps {
  date: Date;
  setDate: (date: Date) => void;
  label?: string;
}

export function TimePickerDemo({ date, setDate, label }: TimePickerDemoProps) {
  const minuteRef = React.useRef<HTMLInputElement>(null);
  const hourRef = React.useRef<HTMLInputElement>(null);

  const [hour, setHour] = React.useState<number>(date.getHours());
  const [minute, setMinute] = React.useState<number>(date.getMinutes());
  const [open, setOpen] = React.useState<boolean>(false);

  // Update internal state when date prop changes
  React.useEffect(() => {
    setHour(date.getHours());
    setMinute(date.getMinutes());
  }, [date]);

  // Update the date when hour or minute changes
  const handleTimeChange = React.useCallback(() => {
    const newDate = new Date(date);
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    setDate(newDate);
  }, [hour, minute, date, setDate]);

  // Update date when hour or minute changes
  React.useEffect(() => {
    handleTimeChange();
  }, [hour, minute, handleTimeChange]);

  const handleHourChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newHour = parseInt(event.target.value, 10);
    if (isNaN(newHour)) {
      setHour(0);
    } else {
      setHour(Math.max(0, Math.min(23, newHour)));
    }
    
    if (event.target.value.length >= 2) {
      minuteRef.current?.focus();
      minuteRef.current?.select();
    }
  };

  const handleMinuteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMinute = parseInt(event.target.value, 10);
    if (isNaN(newMinute)) {
      setMinute(0);
    } else {
      setMinute(Math.max(0, Math.min(59, newMinute)));
    }
  };

  const handleSelectTime = (newHour: number, newMinute: number) => {
    setHour(newHour);
    setMinute(newMinute);
    setOpen(false);
  };

  return (
    <div className="flex flex-col space-y-1">
      {label && <span className="input-label">{label}</span>}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <Clock className="mr-2 h-4 w-4" />
            {format(date, "HH:mm", { locale: pl })}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
          <div className="p-3 bg-white rounded-md">
            <div className="flex items-center justify-between space-x-2 mb-2">
              <div className="grid gap-2">
                <div className="grid grid-cols-2 items-center gap-2">
                  <Input
                    ref={hourRef}
                    type="number"
                    id="hours"
                    className="w-16"
                    value={hour}
                    onChange={handleHourChange}
                    min={0}
                    max={23}
                  />
                  <Input
                    ref={minuteRef}
                    type="number"
                    id="minutes"
                    className="w-16"
                    value={minute}
                    onChange={handleMinuteChange}
                    min={0}
                    max={59}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[0, 6, 12, 18].map((h) => (
                <Button
                  key={h}
                  variant="outline"
                  className="text-xs py-1 px-2"
                  onClick={() => handleSelectTime(h, 0)}
                >
                  {h}:00
                </Button>
              ))}
              {[3, 9, 15, 21].map((h) => (
                <Button
                  key={h}
                  variant="outline"
                  className="text-xs py-1 px-2"
                  onClick={() => handleSelectTime(h, 0)}
                >
                  {h}:00
                </Button>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
