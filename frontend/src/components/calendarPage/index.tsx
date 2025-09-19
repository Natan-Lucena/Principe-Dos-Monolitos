"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";
import Sidebar from "../siderbar";
import Image from "next/image";
import backgroundImage from "../../assets/background.png";

interface Event {
  date: string;
  name: string;
}

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const events: Event[] = [
    { date: "2025-09-20", name: "Reunião de Iniciação" },
    { date: "2025-09-25", name: "Sessão Magna" },
    { date: "2025-09-30", name: "Encontro Regional" },
  ];

  const getEventForDate = (date: Date) => {
    const formatted = format(date, "yyyy-MM-dd");
    return events.find((event) => event.date === formatted);
  };

  return (
    <div className="relative w-screen min-h-screen">
      <Image
        src={backgroundImage}
        alt="Background"
        fill
        className="z-0 object-cover"
      />

      <div className="relative z-10 flex min-h-screen">
        <Sidebar />

        <main className="flex-1 flex flex-col items-center justify-center p-6 md:ml-64">
          <h1 className="text-3xl font-bold mb-6 text-yellow-300 drop-shadow">
            📅 Calendário da Gestão
          </h1>

          <div className="bg-green-800 p-6 rounded-2xl shadow-2xl text-yellow-300">
            <Calendar
              onChange={(date) => setSelectedDate(date as Date)}
              value={selectedDate}
              locale={ptBR.code}
              minDetail="month"
              showFixedNumberOfWeeks={true}
              prev2Label={null}
              next2Label={null}
              prevLabel={<span>‹</span>}
              nextLabel={<span>›</span>}
              navigationLabel={({ date }) => (
                <span className="w-full text-center font-bold text-yellow-300 text-lg">
                  {format(date, "MMMM 'de' yyyy", { locale: ptBR })}
                </span>
              )}
              className={`text-yellow-300
    [&_.react-calendar__navigation]:mb-4 
    [&_.react-calendar__navigation]:flex 
    [&_.react-calendar__navigation]:items-center
    [&_.react-calendar__navigation]:justify-between
    [&_.react-calendar__navigation__label]:flex-1
    [&_.react-calendar__navigation__label]:text-center
    [&_.react-calendar__navigation_button]:bg-yellow-300 
    [&_.react-calendar__navigation_button]:text-green-800
    [&_.react-calendar__navigation_button]:font-bold
    [&_.react-calendar__navigation_button]:px-3
    [&_.react-calendar__navigation_button]:py-1
    [&_.react-calendar__navigation_button]:rounded-lg
    [&_.react-calendar__navigation_button]:hover:bg-yellow-400
    [&_.react-calendar__month-view__weekdays]:font-semibold 
    [&_.react-calendar__month-view__weekdays]:uppercase 
    [&_.react-calendar__month-view__weekdays]:text-yellow-400 
    [&_.react-calendar__tile]:flex 
    [&_.react-calendar__tile]:items-center 
    [&_.react-calendar__tile]:justify-center 
    [&_.react-calendar__tile]:h-12 
    [&_.react-calendar__tile]:w-12 
    [&_.react-calendar__tile]:rounded-lg 
    [&_.react-calendar__tile]:hover:bg-yellow-200 
    [&_.react-calendar__tile--now]:bg-yellow-500 
    [&_.react-calendar__tile--now]:text-black 
    [&_.react-calendar__tile--now]:font-bold 
    [&_.react-calendar__tile--active]:bg-yellow-300 
    [&_.react-calendar__tile--active]:text-black 
    [&_.react-calendar__tile--active]:font-bold`}
              tileClassName={({ date }) => {
                const event = getEventForDate(date);
                return event
                  ? "bg-yellow-100 border border-yellow-400 font-semibold text-yellow-800"
                  : "";
              }}
            />
          </div>

          {selectedDate && (
            <div className="mt-6 w-full max-w-md bg-green-800 p-6 rounded-2xl shadow-xl text-yellow-300">
              <h2 className="text-lg font-semibold">
                {format(selectedDate, "dd 'de' MMMM, yyyy", { locale: ptBR })}
              </h2>
              <ul className="mt-3 space-y-2">
                {events
                  .filter(
                    (event) => event.date === format(selectedDate, "yyyy-MM-dd")
                  )
                  .map((event, idx) => (
                    <li
                      key={idx}
                      className="p-3 bg-yellow-100 border border-yellow-300 rounded-lg text-gray-800 font-medium"
                    >
                      {event.name}
                    </li>
                  ))}
                {events.filter(
                  (event) => event.date === format(selectedDate, "yyyy-MM-dd")
                ).length === 0 && (
                  <p className="text-yellow-200 italic">
                    Nenhum evento neste dia.
                  </p>
                )}
              </ul>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
