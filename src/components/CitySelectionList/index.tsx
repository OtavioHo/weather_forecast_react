import React, { useState } from "react";

import cities from "../../constants/cities.json";
import { Container, Button } from "./styles";

interface CitySelectionListProps {
  onSelect: (woeid: number) => void;
}

export const CitySelectionList: React.FunctionComponent<CitySelectionListProps> =
  ({ onSelect }) => {
    const [selectedCity, setSelectedCity] = useState<number>(cities[0].woeid);

    return (
      <Container>
        {cities.map(({ city, woeid }) => (
          <Button
            key={woeid}
            selected={selectedCity === woeid}
            onClick={() => {
              setSelectedCity(woeid);
              onSelect(woeid);
            }}
          >
            {city}
          </Button>
        ))}
      </Container>
    );
  };
