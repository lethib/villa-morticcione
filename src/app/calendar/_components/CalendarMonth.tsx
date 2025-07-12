import { X } from "lucide-react";
import { availabilitiesAndSeason } from "../_data/availabilitiesAndSeasons";
import { ThisYearBookableMonth } from "../_types";

const dayNames = ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"];

export const CalendarMonth = ({
  monthKey,
}: {
  monthKey: ThisYearBookableMonth;
}) => {
  const monthAvailabilitiesAndSeason = availabilitiesAndSeason[monthKey];

  return (
    <div className="border-2 border-gray-300 rounded-lg p-3 bg-white shadow-sm">
      <div className="text-center font-semibold text-gray-800 mb-3 text-sm">
        {monthAvailabilitiesAndSeason.name}
      </div>

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

      <div className="grid grid-cols-7 gap-1">
        {/* Empty cells for days before month starts */}
        {Array.from(
          { length: monthAvailabilitiesAndSeason.firstDay },
          (_, i) => (
            <div key={`empty-${i}`} className="p-1"></div>
          )
        )}

        {monthAvailabilitiesAndSeason.availability.map((dayInfo) => (
          <div
            key={dayInfo.day}
            className={`text-center p-1 rounded text-xs font-medium min-h-[24px] flex items-center justify-center relative bg-calendar-${dayInfo.season}-season text-white`}
          >
            {dayInfo.day}
            {dayInfo.status === "reserved" && (
              <X
                size={38}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black"
                aria-label="Reserved"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
