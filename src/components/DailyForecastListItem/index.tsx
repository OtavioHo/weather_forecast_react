import React from "react";

import {
  Container,
  CurrentTemp,
  FlexContainer,
  WeatherIcon,
  Title,
  InfoContainer,
} from "./styles";

import getDay from "../../util/getDay";

import IConsolidatedWeather from "../../interfaces/IConsolidatedWeather";

const DailyForecastListItem: React.FunctionComponent<IConsolidatedWeather> = ({
  applicable_date,
  max_temp,
  min_temp,
  wind_direction_compass,
  wind_speed,
  the_temp,
  weather_state_abbr,
  weather_state_name,
}) => {
  return (
    <Container>
      <Title>{getDay(applicable_date)}</Title>
      <WeatherIcon
        src={`https://www.metaweather.com//static/img/weather/${weather_state_abbr}.svg`}
        alt={weather_state_name}
      />
      <CurrentTemp>{the_temp.toFixed()}</CurrentTemp>
      <FlexContainer>
        <InfoContainer>
          <p>max</p>
          <h3>{max_temp.toFixed(1)}</h3>
        </InfoContainer>
        <InfoContainer>
          <p>min</p>
          <h3>{min_temp.toFixed(1)}</h3>
        </InfoContainer>
      </FlexContainer>
      <FlexContainer>
        <InfoContainer>
          <p>wind speed</p>
          <h3>{wind_speed.toFixed(1)}</h3>
        </InfoContainer>
        <InfoContainer>
          <p>wind direction</p>
          <h3>{wind_direction_compass}</h3>
        </InfoContainer>
      </FlexContainer>
    </Container>
  );
};

export default DailyForecastListItem;
