export type Season = "low" | "mid" | "high" | "very-high";
export type ThisYearBookableMonth =
  | "avr-25"
  | "mai-25"
  | "juin-25"
  | "juil-25"
  | "aout-25"
  | "sept-25";
export type CalendarDay = {
  day: number;
  status: "available" | "reserved";
  season: Season;
};
