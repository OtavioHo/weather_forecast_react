const getDay = (date: string): string => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednsday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return days[new Date(date).getDay()];
};

export default getDay;
