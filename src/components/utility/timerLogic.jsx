import dayjs from "dayjs";

export const getRemainingTime = (timestampMs) => {
  const dayJsTimestamp = dayjs(timestampMs);
  const dayJsNow = dayjs();
  if (dayJsTimestamp.isBefore(dayJsNow)) {
    return {
      seconds: "00",
      minutes: "00",
      hours: "00",
      days: "00",
    };
  }
  return {
    seconds: getRemainingSeconds(dayJsNow, dayJsTimestamp),
    minutes: getRemainingMinutes(dayJsNow, dayJsTimestamp),
    hours: getRemainingHours(dayJsNow, dayJsTimestamp),
    days: getRemainingDays(dayJsNow, dayJsTimestamp),
  };
};

const getRemainingSeconds = (dayJsNow, dayJsTimestamp) => {
  const sec = dayJsTimestamp.diff(dayJsNow, "seconds") % 60;
  return addZero(sec, 2);
};
const getRemainingMinutes = (dayJsNow, dayJsTimestamp) => {
  const mins = dayJsTimestamp.diff(dayJsNow, "minutes") % 60;
  return addZero(mins, 2);
};
const getRemainingHours = (dayJsNow, dayJsTimestamp) => {
  const hrs = dayJsTimestamp.diff(dayJsNow, "hours") % 24;
  return addZero(hrs, 2);
};
const getRemainingDays = (dayJsNow, dayJsTimestamp) => {
  const days = dayJsTimestamp.diff(dayJsNow, "days");
  return days.toString();
};

const addZero = (num, minLength) => {
  const numstr = num.toString();
  if (numstr.length >= minLength) return numstr;
  return "0".repeat(minLength - numstr.length) + numstr;
};
