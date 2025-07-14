import { CalendarDay, Season, ThisYearBookableMonth } from "../_types";

/**
 * Generates an array of `CalendarDay` objects for a given range of days, assigning each day a specified season and status.
 *
 * @param fromDay - The starting day of the range (inclusive).
 * @param toDay - The ending day of the range (inclusive).
 * @param season - The season to assign to each generated day.
 * @param status - The availability status to assign to each generated day ("available" or "reserved").
 * @returns An array of `CalendarDay` objects representing each day in the specified range.
 */
const createDays = (
  fromDay: number,
  toDay: number,
  season: Season,
  status: "available" | "reserved"
): CalendarDay[] => {
  return Array.from({ length: toDay - fromDay + 1 }, (_, i) => ({
    day: fromDay + i,
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
    availability: [...createDays(1, 30, "low", "available")],
  },
  "mai-25": {
    name: "Mai 2025",
    days: 31,
    firstDay: 4, // Thursday
    availability: [
      ...createDays(1, 16, "low", "available"),
      ...createDays(17, 31, "mid", "available"),
    ],
  },
  "juin-25": {
    name: "Juin 2025",
    days: 30,
    firstDay: 7, // Sunday
    availability: [...createDays(1, 30, "mid", "available")],
  },
  "juil-25": {
    name: "Juillet 2025",
    days: 31,
    firstDay: 2, // Tuesday
    availability: [
      ...createDays(1, 4, "mid", "available"),
      ...createDays(5, 11, "high", "available"),
      ...createDays(12, 31, "very-high", "available"),
    ],
  },
  "aout-25": {
    name: "Août 2025",
    days: 31,
    firstDay: 5, // Friday
    availability: [
      ...createDays(1, 22, "very-high", "available"),
      ...createDays(23, 29, "high", "available"),
      ...createDays(30, 31, "mid", "available"),
    ],
  },
  "sept-25": {
    name: "Septembre 2025",
    days: 30,
    firstDay: 1, // Monday
    availability: [
      ...createDays(1, 12, "mid", "available"),
      ...createDays(13, 30, "low", "available"),
    ],
  },
};
