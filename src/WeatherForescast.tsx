import React, { useEffect, useState } from "react";
import { CitySelectionList } from "./components/CitySelectionList";

import DailyForecastList from "./components/DailyForecastList";

import cities from "./constants/cities.json";

import weatherApi from "./services/weatherApi";

import IConsolidatedWeather from "./interfaces/IConsolidatedWeather";

const WeatherForecast: React.FunctionComponent = () => {
  const [selectedCity, setSelectedCity] = useState<number>(cities[0].woeid);
  const [consolidatedWeather, setConsolidatedWeather] = useState<
    IConsolidatedWeather[]
  >([]);

  const onSelect = (woeid: number): void => {
    setSelectedCity(woeid);
  };

  useEffect(() => {
    async function getForecast() {
      try {
        const response = await weatherApi.get(`/api/location/${selectedCity}`);
        response.data.consolidated_weather.pop();
        setConsolidatedWeather(response.data.consolidated_weather);
      } catch (error) {
        console.log(error);
      }
    }

    getForecast();
  }, [selectedCity]);

  return (
    <>
      <CitySelectionList
        cities={cities}
        selectedCity={selectedCity}
        onSelect={onSelect}
      />
      <DailyForecastList consolidatedWeatherArray={consolidatedWeather} />;
    </>
  );
};

export default WeatherForecast;
