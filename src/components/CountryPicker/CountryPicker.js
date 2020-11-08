import React from "react";
import { FormControl, NativeSelect } from "@material-ui/core";

import styles from "./CountryPicker.module.css";

const CountryPicker = ({ countriesList, handleCountryChange }) => {
  return (
    <div className={styles.container}>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => {
            handleCountryChange(e.target.value);
          }}
          className={styles.nativeSelect}
        >
          <option value="">Global</option>
          {countriesList.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
