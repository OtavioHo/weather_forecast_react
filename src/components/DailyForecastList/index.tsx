import React from "react";

import DailyForecastListItem from "../DailyForecastListItem";

const data = {
  id: 5015782581862400,
  weather_state_name: "Heavy Rain",
  weather_state_abbr: "hr",
  wind_direction_compass: "WNW",
  created: "2021-05-17T12:32:02.680041Z",
  applicable_date: "2021-05-17",
  min_temp: 7.555,
  max_temp: 14.83,
  the_temp: 14.42,
  wind_speed: 3.9151483774808455,
  wind_direction: 294.2355866200472,
  air_pressure: 1005.5,
  humidity: 78,
  visibility: 8.70727451682176,
  predictability: 77,
};

const DailyForecastList: React.FunctionComponent = () => {
  return <DailyForecastListItem {...data} />;
};

export default DailyForecastList;
