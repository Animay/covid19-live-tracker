import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 250,
    marginBottom: theme.spacing(2),
  },
  select: {
    backgroundColor: 'white',
  },
}));

const CountrySelector = ({ countries, selectedCountry, onCountryChange, loading }) => {
  const classes = useStyles();

  if (loading) {
    return (
      <FormControl className={classes.formControl}>
        <CircularProgress size={24} />
      </FormControl>
    );
  }

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="country-select-label">Select Country</InputLabel>
      <Select
        labelId="country-select-label"
        id="country-select"
        value={selectedCountry || 'global'}
        onChange={(e) => onCountryChange(e.target.value)}
        label="Select Country"
        className={classes.select}
      >
        <MenuItem value="global">Global</MenuItem>
        {countries &&
          countries.map((country) => (
            <MenuItem key={country.countryInfo?.iso2 || country.country} value={country.country}>
              {country.country}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default CountrySelector;

