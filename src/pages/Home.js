import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
} from '@material-ui/core';
import moment from 'moment';
import StatsCard from '../components/StatsCard';
import CountrySelector from '../components/CountrySelector';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import Loader from '../components/Loader';
import {
  getGlobalStats,
  getCountriesList,
  getCountryStats,
  getHistoricalData,
} from '../api/covid';
import { formatNumber } from '../utils/formatNumbers';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(3),
    fontWeight: 'bold',
  },
  lastUpdated: {
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
    fontStyle: 'italic',
  },
  statsGrid: {
    marginBottom: theme.spacing(4),
  },
  chartGrid: {
    marginTop: theme.spacing(2),
  },
  errorPaper: {
    padding: theme.spacing(2),
    backgroundColor: '#ffebee',
    color: '#c62828',
    marginBottom: theme.spacing(2),
  },
}));

const Home = () => {
  const classes = useStyles();
  const [globalStats, setGlobalStats] = useState(null);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('global');
  const [countryStats, setCountryStats] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    fetchInitialData();
  }, []);

  useEffect(() => {
    if (selectedCountry === 'global') {
      setCountryStats(null);
      setHistoricalData(null);
    } else {
      fetchCountryData(selectedCountry);
    }
  }, [selectedCountry]);

  const fetchInitialData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const [global, countriesList] = await Promise.all([
        getGlobalStats(),
        getCountriesList(),
      ]);

      setGlobalStats(global);
      setCountries(countriesList);
      setLastUpdated(new Date());
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch data. Please try again later.');
      setLoading(false);
      console.error(err);
    }
  };

  const fetchCountryData = async (country) => {
    try {
      setLoading(true);
      setError(null);

      const [stats, historical] = await Promise.all([
        getCountryStats(country),
        getHistoricalData(country, 120),
      ]);

      setCountryStats(stats);
      
      // Process historical data for charts
      if (historical.timeline) {
        const labels = Object.keys(historical.timeline.cases);
        const cases = Object.values(historical.timeline.cases);
        const recovered = Object.values(historical.timeline.recovered);
        const deaths = Object.values(historical.timeline.deaths);

        setHistoricalData({
          labels,
          cases,
          recovered,
          deaths,
        });
      }

      setLastUpdated(new Date());
      setLoading(false);
    } catch (err) {
      setError(`Failed to fetch data for ${country}. Please try again.`);
      setLoading(false);
      console.error(err);
    }
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  const displayStats = selectedCountry === 'global' ? globalStats : countryStats;
  const displayName = selectedCountry === 'global' ? 'Global' : selectedCountry;

  if (loading && !displayStats) {
    return (
      <Container className={classes.container}>
        <Loader message="Loading COVID-19 data..." />
      </Container>
    );
  }

  return (
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        {displayName} COVID-19 Statistics
      </Typography>

      {lastUpdated && (
        <Typography variant="body2" className={classes.lastUpdated}>
          Last updated: {moment(lastUpdated).format('MMMM Do YYYY, h:mm:ss a')}
        </Typography>
      )}

      {error && (
        <Paper className={classes.errorPaper}>
          <Typography>{error}</Typography>
        </Paper>
      )}

      <Box mb={3}>
        <CountrySelector
          countries={countries}
          selectedCountry={selectedCountry}
          onCountryChange={handleCountryChange}
          loading={loading && countries.length === 0}
        />
      </Box>

      {displayStats && (
        <>
          <Grid container spacing={3} className={classes.statsGrid}>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                title="Total Cases"
                value={formatNumber(displayStats.cases)}
                type="cases"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                title="Recovered"
                value={formatNumber(displayStats.recovered)}
                type="recovered"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                title="Deaths"
                value={formatNumber(displayStats.deaths)}
                type="deaths"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                title="Active Cases"
                value={formatNumber(
                  displayStats.cases - displayStats.recovered - displayStats.deaths
                )}
                type="active"
              />
            </Grid>
          </Grid>

          {displayStats.todayCases !== undefined && (
            <Grid container spacing={3} className={classes.statsGrid}>
              <Grid item xs={12} sm={6} md={3}>
                <StatsCard
                  title="Today's Cases"
                  value={formatNumber(displayStats.todayCases)}
                  type="cases"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StatsCard
                  title="Today's Recovered"
                  value={formatNumber(displayStats.todayRecovered || 0)}
                  type="recovered"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StatsCard
                  title="Today's Deaths"
                  value={formatNumber(displayStats.todayDeaths)}
                  type="deaths"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StatsCard
                  title="Critical"
                  value={formatNumber(displayStats.critical || 0)}
                  type="active"
                />
              </Grid>
            </Grid>
          )}

          {historicalData && (
            <Grid container spacing={3} className={classes.chartGrid}>
              <Grid item xs={12} md={6}>
                <LineChart
                  data={historicalData}
                  title={`${displayName} - 120 Day Trend`}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <BarChart
                  data={historicalData}
                  title={`${displayName} - Comparison`}
                />
              </Grid>
            </Grid>
          )}
        </>
      )}
    </Container>
  );
};

export default Home;

