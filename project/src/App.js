import { useState, useEffect } from "react";
import { Global, css } from "@emotion/react";
import CountryList from "./components/CountryList";
import GlobalData from "./components/GlobalData";
import Navbar from "./components/NavDescription";
import BarChart from "./components/BarChart";

function App() {
  const [data, setData] = useState();
  const [activeCountries, setActiveCountries] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://api.covid19api.com/summary");
    const data = await res.json();

    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onCountryClick = (Country) => {
    const countryIndex = activeCountries.findIndex(
      (activeCountry) => activeCountry.ID === Country.ID
    );

    if (countryIndex > -1) {
      const newActiveCountries = [...activeCountries];
      newActiveCountries.splice(countryIndex, 1);
      setActiveCountries(newActiveCountries);
    } else {
      setActiveCountries([...activeCountries, Country]);
    }
  };

  return (
    <div>
      <Navbar activeCountries={activeCountries} />
      <Global
        styles={css`
          body {
            background-color: #f1f1f1;
            color: black;
          }
        `}
      />
      {data ? (
        <>
          <GlobalData
            NewConfirmed={data.Global.NewConfirmed}
            NewDeaths={data.Global.NewDeaths}
            NewRecovered={data.Global.NewRecovered}
          />
          <hr />

          {activeCountries.length ? (
            <BarChart activeCountries={activeCountries} />
          ) : null}
          <CountryList
            Countries={data.Countries}
            onItemClick={onCountryClick}
          />
        </>
      ) : (
        "Loading ..."
      )}
    </div>
  );
}

export default App;
