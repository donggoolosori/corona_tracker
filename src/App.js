import React, { useEffect, useState } from "react";
// Component
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
// API
import { fetchData, fetchCountries, fetchDailyData } from "./api";
// style
import styles from "./App.module.css";
// Top image
import coronaImage from "./images/image.png";

const App = () => {
  const [data, setData] = useState({}); // if country state is null global corona data, else country corona data
  const [dailyData, setDailyData] = useState([]); // corona data by date
  const [country, setCountry] = useState(""); // Country that picked on CountryPicker
  const [countriesList, setCountriesList] = useState([]); // Whole countries list

  useEffect(() => {
    // Get and Set Current Global Corona data (infected, recovered, deaths, last update date)
    const dataAPI = async () => {
      setData(await fetchData());
    };
    // Get and Set Corona Data by date
    const dailyDataAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    // Get and Set Countries List
    const countriesListAPI = async () => {
      setCountriesList(await fetchCountries());
    };
    countriesListAPI();
    dailyDataAPI();
    dataAPI();
  }, []);
  // handle Country Change Event
  const handleCountryChange = async (country) => {
    setData(await fetchData(country));
    setCountry(country);
  };
  return (
    <div className={styles.container}>
      <img src={coronaImage} className={styles.image} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker
        countriesList={countriesList}
        handleCountryChange={handleCountryChange}
      />
      <Chart data={data} dailyData={dailyData} country={country} />
    </div>
  );
};

export default App;
