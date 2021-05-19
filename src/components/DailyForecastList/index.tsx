import React from "react";
import { Container } from "./styles";

import DailyForecastListItem from "../DailyForecastListItem";

import IConsolidatedWeather from "../../interfaces/IConsolidatedWeather";

interface DailyForecastListProps {
  consolidatedWeatherArray: IConsolidatedWeather[];
  loading: boolean;
}

const DailyForecastList: React.FunctionComponent<DailyForecastListProps> = ({
  consolidatedWeatherArray,
  loading,
}) => {
  return (
    <Container>
      {loading
        ? "Loading..."
        : consolidatedWeatherArray.map((item) => (
            <DailyForecastListItem key={item.id} {...item} />
          ))}
    </Container>
  );
};

export default DailyForecastList;
