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

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const onSelect = (woeid: number): void => {
    setSelectedCity(woeid);
  };

  useEffect(() => {
    async function getForecast() {
      try {
        setError(null);
        setLoading(true);
        const response = await weatherApi.get(`/api/location/${selectedCity}`);
        response.data.consolidated_weather.pop();
        setConsolidatedWeather(response.data.consolidated_weather);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
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
      {error ? (
        error
      ) : (
        <DailyForecastList
          consolidatedWeatherArray={consolidatedWeather}
          loading={loading}
        />
      )}
    </>
  );
};

export default WeatherForecast;
