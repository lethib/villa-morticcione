const calendarData = {
  "avr-25": {
    name: "Avril 2025",
    days: 30,
    firstDay: 2, // Tuesday (0=Monday, 1=Tuesday, etc.)
    availability: Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      status: "available",
      season: "basse",
    })),
  },
  "mai-25": {
    name: "Mai 2025",
    days: 31,
    firstDay: 4, // Thursday
    availability: [
      ...Array.from({ length: 3 }, (_, i) => ({
        day: i + 1,
        status: "reserved",
        season: "moyenne",
      })),
      ...Array.from({ length: 13 }, (_, i) => ({
        day: i + 4,
        status: "available",
        season: "moyenne",
      })),
      { day: 17, status: "available", season: "moyenne" },
      { day: 18, status: "available", season: "moyenne" },
      ...Array.from({ length: 13 }, (_, i) => ({
        day: i + 19,
        status: "available",
        season: "moyenne",
      })),
    ],
  },
  "juin-25": {
    name: "Juin 2025",
    days: 30,
    firstDay: 6, // Sunday
    availability: [
      { day: 1, status: "available", season: "moyenne" },
      ...Array.from({ length: 5 }, (_, i) => ({
        day: i + 2,
        status: "available",
        season: "moyenne",
      })),
      ...Array.from({ length: 2 }, (_, i) => ({
        day: i + 7,
        status: "reserved",
        season: "moyenne",
      })),
      ...Array.from({ length: 21 }, (_, i) => ({
        day: i + 9,
        status: "available",
        season: "moyenne",
      })),
    ],
  },
  "juil-25": {
    name: "Juillet 2025",
    days: 31,
    firstDay: 2, // Tuesday
    availability: [
      { day: 1, status: "available", season: "moyenne" },
      ...Array.from({ length: 5 }, (_, i) => ({
        day: i + 2,
        status: "available",
        season: "haute",
      })),
      ...Array.from({ length: 25 }, (_, i) => ({
        day: i + 7,
        status: "reserved",
        season: "haute",
      })),
    ],
  },
  "aout-25": {
    name: "Août 2025",
    days: 31,
    firstDay: 5, // Friday
    availability: [
      ...Array.from({ length: 29 }, (_, i) => ({
        day: i + 1,
        status: "reserved",
        season: i < 15 ? "haute" : "tres-haute",
      })),
      { day: 30, status: "available", season: "moyenne" },
      { day: 31, status: "available", season: "moyenne" },
    ],
  },
  "sept-25": {
    name: "Septembre 2025",
    days: 30,
    firstDay: 1, // Monday
    availability: [
      ...Array.from({ length: 12 }, (_, i) => ({
        day: i + 1,
        status: "available",
        season: "moyenne",
      })),
      ...Array.from({ length: 2 }, (_, i) => ({
        day: i + 13,
        status: "reserved",
        season: "moyenne",
      })),
      ...Array.from({ length: 16 }, (_, i) => ({
        day: i + 15,
        status: "available",
        season: "moyenne",
      })),
    ],
  },
};

import { X } from "lucide-react";

const dayNames = ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"];

const getStatusColor = (status: string, season: string) => {
  // Available and reserved days use the same colors based on season
  switch (season) {
    case "basse":
      return "bg-green-500 text-white";
    case "moyenne":
      return "bg-yellow-500 text-white";
    case "haute":
      return "bg-pink-500 text-white";
    case "tres-haute":
      return "bg-red-700 text-white";
    default:
      return "bg-gray-200 text-gray-600";
  }
};

export const CalendarMonth = ({ monthKey }: { monthKey: string }) => {
  const month = calendarData[monthKey as keyof typeof calendarData];

  return (
    <div className="border-2 border-gray-300 rounded-lg p-3 bg-white shadow-sm">
      <div className="text-center font-semibold text-gray-800 mb-3 text-sm">
        {month.name}
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day) => (
          <div
            key={day}
            className="text-center text-xs font-semibold text-gray-600 p-1"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Empty cells for days before month starts */}
        {Array.from({ length: month.firstDay }, (_, i) => (
          <div key={`empty-${i}`} className="p-1"></div>
        ))}

        {/* Month days */}
        {month.availability.map((dayInfo) => (
          <div
            key={dayInfo.day}
            className={`text-center p-1 rounded text-xs font-medium min-h-[24px] flex items-center justify-center relative ${getStatusColor(
              dayInfo.status,
              dayInfo.season
            )}`}
          >
            {dayInfo.day}
            {dayInfo.status === "reserved" && (
              <X
                size={38}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
