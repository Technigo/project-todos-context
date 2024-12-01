"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/dashboard/ui/button";
import { Calendar } from "@/components/dashboard/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/dashboard/ui/popover";

interface DatePickerProps {
  value: string;
  onChange: (date: string) => void;
}

export function DatePickerDemo({ value, onChange }: DatePickerProps) {
  const [date, setDate] = React.useState<Date>(value ? new Date(value) : new Date());

  const handleDateSelect = (newDate: Date | null) => {
    if (newDate) {
      setDate(newDate);
      onChange(newDate.toISOString());
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
