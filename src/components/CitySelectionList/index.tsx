import React from "react";

import cities from "../../constants/cities.json";
import { Container, Button } from "./styles";

export const CitySelectionList: React.FunctionComponent = () => {
  return (
    <Container>
      {cities.map(({ city, woeid }) => (
        <Button key={woeid}>{city}</Button>
      ))}
    </Container>
  );
};
