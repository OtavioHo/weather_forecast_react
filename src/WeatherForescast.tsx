import React from "react";
import { CitySelectionList } from "./components/CitySelectionList";

import DailyForecastList from "./components/DailyForecastList";

function App() {
  return (
    <>
      <CitySelectionList />
      <DailyForecastList />;
    </>
  );
}

export default App;
