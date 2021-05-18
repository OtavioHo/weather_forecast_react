const getDay = (date: string): string => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return days[new Date(date).getDay()];
};

export default getDay;
