import React from "react";

import { Container, Button } from "./styles";

interface CitySelectionListProps {
  onSelect: (woeid: number) => void;
  cities: {
    city: string;
    woeid: number;
  }[];
  selectedCity: number;
}

export const CitySelectionList: React.FunctionComponent<CitySelectionListProps> =
  ({ cities, onSelect, selectedCity }) => {
    return (
      <Container>
        {cities.map(({ city, woeid }) => (
          <Button
            key={woeid}
            selected={selectedCity === woeid}
            onClick={() => {
              onSelect(woeid);
            }}
          >
            {city}
          </Button>
        ))}
      </Container>
    );
  };
