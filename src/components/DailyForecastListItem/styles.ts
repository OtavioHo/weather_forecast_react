import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  min-height: 300px;
  border: solid gray;
  text-align: center;
  padding: 10px;
`;

export const Title = styled.h2`
  margin: 0 0 10px 0;
`;

export const WeatherIcon = styled.img`
  width: 100%;
  height: auto;
`;

export const CurrentTemp = styled.h1`
  font-size: 40px;
  font-weight: 900;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
