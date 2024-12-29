'use client';

import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";

export default function ReservationPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    event: '',
    bandName: '',
    contact: '',
  });

  const timeslots = [
    '08:00 - 08:30',
    '08:30 - 09:00',
    '09:00 - 09:30',
    '10:00 - 10:30',
    '10:30 - 11:00',
    '13:30 - 14:00',
    '14:00 - 14:30',
    '14:30 - 15:00',
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <img src="/api/placeholder/40/40" alt="IMC Logo" className="w-10 h-10" />
          <span className="font-bold">IMC</span>
        </div>
        <Menu className="w-6 h-6" />
      </div>

      <div className="p-4 max-w-lg mx-auto">
        <h1 className="text-center text-xl mb-6">Reservation</h1>

        {/* Calendar */}
        <Calendar
          selected={selectedDate}
          onSelect={(date: Date | undefined) => setSelectedDate(date)}
          className="rounded-lg bg-gray-900"
          classNames={{
            months: "space-y-4 sm:space-y-0",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center gap-1",
            caption_label: "text-sm font-medium",
            nav: "flex items-center gap-1",
            nav_button: "p-1 bg-gray-800 rounded-md hover:bg-gray-700",
            table: "w-full border-collapse",
            head_row: "flex",
            head_cell: "text-gray-500 rounded-md w-9 font-normal text-sm flex-1 text-center",
            row: "flex w-full mt-2",
            cell: "text-center text-sm relative p-0 flex-1",
            day: "h-9 w-9 p-0 mx-auto flex items-center justify-center rounded-md hover:bg-gray-800",
            day_selected: "bg-red-500 text-white hover:bg-red-600",
            day_today: "bg-gray-700",
            day_outside: "text-gray-500 opacity-50",
          }}
          components={{
            IconLeft: () => <ChevronLeft className="w-4 h-4" />,
            IconRight: () => <ChevronRight className="w-4 h-4" />,
          }}
        />

        {/* Time slots */}
        <div className="mt-6">
          <h2 className="text-lg mb-3">เวลาที่จอง</h2>
          <div className="space-y-2">
            {timeslots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`w-full p-3 text-left rounded-md ${
                  selectedTime === time ? 'bg-red-500' : 'bg-gray-800'
                } hover:bg-gray-700 transition-colors`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="mt-6 space-y-4">
          <div>
            <label className="block mb-2">Event</label>
            <input
              type="text"
              placeholder="ลานกิจกรรม"
              className="w-full p-3 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              name="event"
              value={formData.event}
              onChange={(e) => setFormData(prev => ({ ...prev, event: e.target.value }))}
            />
          </div>
          <div>
            <label className="block mb-2">Band Name</label>
            <input
              type="text"
              placeholder="วงดนตรี"
              className="w-full p-3 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              name="bandName"
              value={formData.bandName}
              onChange={(e) => setFormData(prev => ({ ...prev, bandName: e.target.value }))}
            />
          </div>
          <div>
            <label className="block mb-2">เบอร์ติดต่อผู้จอง</label>
            <input
              type="tel"
              placeholder="0811111111"
              className="w-full p-3 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              name="contact"
              value={formData.contact}
              onChange={(e) => setFormData(prev => ({ ...prev, contact: e.target.value }))}
            />
          </div>

          <button className="w-full bg-red-500 text-white p-3 rounded-md hover:bg-red-600 transition-colors mt-6">
            CONFIRM
          </button>
        </div>
      </div>
    </div>

  );
}
