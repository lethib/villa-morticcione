import { CalendarDay, Season, ThisYearBookableMonth } from "../_types";

const createDays = (
  count: number,
  season: Season,
  status: "available" | "reserved",
  startDay: number = 1
): CalendarDay[] => {
  return Array.from({ length: count }, (_, i) => ({
    day: startDay + i,
    status,
    season,
  }));
};

export const availabilitiesAndSeason: Record<
  ThisYearBookableMonth,
  {
    name: string;
    days: number;
    firstDay: number;
    availability: Array<CalendarDay>;
  }
> = {
  "avr-25": {
    name: "Avril 2025",
    days: 30,
    firstDay: 2, // Tuesday
    availability: createDays(30, "low", "available"),
  },
  "mai-25": {
    name: "Mai 2025",
    days: 31,
    firstDay: 4, // Thursday
    availability: [
      ...createDays(3, "mid", "reserved", 1),
      ...createDays(13, "mid", "available", 4),
      { day: 17, status: "available", season: "mid" },
      { day: 18, status: "available", season: "mid" },
      ...createDays(13, "mid", "available", 19),
    ],
  },
  "juin-25": {
    name: "Juin 2025",
    days: 30,
    firstDay: 6, // Sunday
    availability: [
      { day: 1, status: "available", season: "mid" },
      ...createDays(5, "mid", "available", 2),
      ...createDays(2, "mid", "reserved", 7),
      ...createDays(21, "mid", "available", 9),
    ],
  },
  "juil-25": {
    name: "Juillet 2025",
    days: 31,
    firstDay: 2, // Tuesday
    availability: [
      { day: 1, status: "available", season: "mid" },
      ...createDays(5, "high", "available", 2),
      ...createDays(25, "high", "reserved", 7),
    ],
  },
  "aout-25": {
    name: "Août 2025",
    days: 31,
    firstDay: 5, // Friday
    availability: [
      ...createDays(15, "high", "reserved", 1),
      ...createDays(14, "very-high", "reserved", 16),
      { day: 30, status: "available", season: "mid" },
      { day: 31, status: "available", season: "mid" },
    ],
  },
  "sept-25": {
    name: "Septembre 2025",
    days: 30,
    firstDay: 1, // Monday
    availability: [
      ...createDays(12, "mid", "available", 1),
      ...createDays(2, "mid", "reserved", 13),
      ...createDays(16, "mid", "available", 15),
    ],
  },
};
