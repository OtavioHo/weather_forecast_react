import React from "react";
import { Container } from "./styles";

import DailyForecastListItem from "../DailyForecastListItem";

const data = [
  {
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
  },
  {
    id: 6269969940611072,
    weather_state_name: "Heavy Rain",
    weather_state_abbr: "hr",
    wind_direction_compass: "WSW",
    created: "2021-05-17T12:32:02.480613Z",
    applicable_date: "2021-05-18",
    min_temp: 6.195,
    max_temp: 15.66,
    the_temp: 14.579999999999998,
    wind_speed: 6.6038401864153355,
    wind_direction: 254.16967397982302,
    air_pressure: 1013.5,
    humidity: 66,
    visibility: 11.403714805535671,
    predictability: 77,
  },
  {
    id: 5395600498491392,
    weather_state_name: "Light Rain",
    weather_state_abbr: "lr",
    wind_direction_compass: "WNW",
    created: "2021-05-17T12:32:02.774998Z",
    applicable_date: "2021-05-19",
    min_temp: 8.03,
    max_temp: 15.834999999999999,
    the_temp: 16.085,
    wind_speed: 5.662601975293619,
    wind_direction: 290.5091271529589,
    air_pressure: 1018,
    humidity: 60,
    visibility: 12.59488338105464,
    predictability: 75,
  },
  {
    id: 6562924022726656,
    weather_state_name: "Showers",
    weather_state_abbr: "s",
    wind_direction_compass: "SSW",
    created: "2021-05-17T12:32:02.898316Z",
    applicable_date: "2021-05-20",
    min_temp: 6.42,
    max_temp: 15.52,
    the_temp: 15.59,
    wind_speed: 9.157244702558392,
    wind_direction: 209.1560662877698,
    air_pressure: 1021.5,
    humidity: 61,
    visibility: 12.005823490813647,
    predictability: 73,
  },
  {
    id: 6317388963250176,
    weather_state_name: "Light Rain",
    weather_state_abbr: "lr",
    wind_direction_compass: "SW",
    created: "2021-05-17T12:32:02.270616Z",
    applicable_date: "2021-05-21",
    min_temp: 10.02,
    max_temp: 16.5,
    the_temp: 15.469999999999999,
    wind_speed: 13.334662798923619,
    wind_direction: 223.6666365779404,
    air_pressure: 1004,
    humidity: 64,
    visibility: 9.099981110315756,
    predictability: 75,
  },
  {
    id: 5730800986226688,
    weather_state_name: "Heavy Rain",
    weather_state_abbr: "hr",
    wind_direction_compass: "SW",
    created: "2021-05-17T12:32:05.064416Z",
    applicable_date: "2021-05-22",
    min_temp: 9.06,
    max_temp: 12,
    the_temp: 10.6,
    wind_speed: 7.569277221029189,
    wind_direction: 235,
    air_pressure: 996,
    humidity: 87,
    visibility: 9.675370834327527,
    predictability: 77,
  },
];

const DailyForecastList: React.FunctionComponent = () => {
  return (
    <Container>
      {data.map((item) => (
        <DailyForecastListItem key={item.id} {...item} />
      ))}
    </Container>
  );
};

export default DailyForecastList;
