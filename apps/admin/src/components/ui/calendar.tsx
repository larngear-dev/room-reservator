"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker, useDayPicker, useNavigation } from "react-day-picker"
import { setMonth, format, yearsToDays } from 'date-fns'

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select"
import { useSelectedLayoutSegment } from "next/navigation"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium hidden",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-red-600 text-white hover:bg-red-500 hover:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        caption_dropdowns: "flex gap-1",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("h-4 w-4", className)} {...props} />
        ),
        Dropdown: (props) => {
          const {fromDate, fromMonth, fromYear, toDate, toMonth, toYear} = useDayPicker();
          const {goToMonth, currentMonth} = useNavigation();

          if(props.name == 'months') {
            const selectItems = Array.from({length: 12}, (_,i) => ({
              value: i.toString(),
              label: format(setMonth(new Date(), i), "MMM")
            }))
            return <Select onValueChange={(newValue) => {
              const newDate = new Date(currentMonth);
              newDate.setMonth(parseInt(newValue));
              goToMonth(newDate)
            }} value={props.value?.toString()}> 
              <SelectTrigger className="
              flex h-9 w-[100px] items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">
                {format(currentMonth, 'MMM')}
              </SelectTrigger>
              <SelectContent>
                {selectItems.map(selectItem => <SelectItem value={selectItem.value}>
                  {selectItem.label}
                </SelectItem>)}
              </SelectContent>
            </Select>;
          }
          else if(props.name == 'years') {
            const earliestYear = fromYear || fromMonth?.getFullYear() || fromDate?.getFullYear()
            const latestYear = toYear || toMonth?.getFullYear() || toDate?.getFullYear()

            let selectItems: {label: string; value: string}[] = [];

            if(earliestYear && latestYear) {
              const yearLength = latestYear - earliestYear + 1;
              selectItems = Array.from({length: yearLength}, (_,i) => ({
                label: (earliestYear + i).toString(),
                value: (earliestYear + i).toString(),
              }));
            }
            return <Select onValueChange={(newValue) => {
              const newDate = new Date(currentMonth);
              newDate.setFullYear(parseInt(newValue));
              goToMonth(newDate)
            }} value={props.value?.toString()}>
            <SelectTrigger className="
              flex h-9 w-[100px] items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">
              {currentMonth.getFullYear()}
            </SelectTrigger>
            <SelectContent>
              {selectItems.map(selectItem => <SelectItem value={selectItem.value}>
                {selectItem.label}
              </SelectItem>)}
            </SelectContent>
          </Select>;
          }
          return null;
        }
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
