import React from "react";

import {
  Container,
  CurrentTemp,
  FlexContainer,
  WeatherIcon,
  Title,
} from "./styles";

import IConsolidatedWeather from "../../interfaces/IConsolidatedWeather";

const DailyForecastListItem: React.FunctionComponent<IConsolidatedWeather> = ({
  applicable_date,
  max_temp,
  min_temp,
  wind_direction,
  wind_speed,
  the_temp,
  weather_state_abbr,
  weather_state_name,
}) => {
  return (
    <Container>
      <Title>{applicable_date}</Title>
      <WeatherIcon
        src={`https://www.metaweather.com//static/img/weather/${weather_state_abbr}.svg`}
        alt={weather_state_name}
      />
      <CurrentTemp>{the_temp}</CurrentTemp>
      <FlexContainer>
        <div>
          <p>max</p>
          <h3>{max_temp}</h3>
        </div>
        <div>
          <p>min</p>
          <h3>{min_temp}</h3>
        </div>
      </FlexContainer>
      <FlexContainer>
        <div>
          <p>wind speed</p>
          <h3>{wind_speed}</h3>
        </div>
        <div>
          <p>wind direction</p>
          <h3>{wind_direction}</h3>
        </div>
      </FlexContainer>
    </Container>
  );
};

export default DailyForecastListItem;
