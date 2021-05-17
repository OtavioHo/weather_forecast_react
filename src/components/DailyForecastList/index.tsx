import React from "react";
import { Container } from "./styles";

import DailyForecastListItem from "../DailyForecastListItem";

import IConsolidatedWeather from "../../interfaces/IConsolidatedWeather";

interface DailyForecastListProps {
  consolidatedWeatherArray: IConsolidatedWeather[];
}

const DailyForecastList: React.FunctionComponent<DailyForecastListProps> = ({
  consolidatedWeatherArray,
}) => {
  return (
    <Container>
      {consolidatedWeatherArray.map((item) => (
        <DailyForecastListItem key={item.id} {...item} />
      ))}
    </Container>
  );
};

export default DailyForecastList;
