import axios from 'axios';

const BASE_URL = 'https://disease.sh/v3/covid-19';

/**
 * Get global COVID-19 statistics
 * @returns {Promise} Global stats data
 */
export const getGlobalStats = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching global stats:', error);
    throw error;
  }
};

/**
 * Get list of all countries with their COVID-19 data
 * @returns {Promise} Array of country data
 */
export const getCountriesList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/countries`);
    return response.data;
  } catch (error) {
    console.error('Error fetching countries list:', error);
    throw error;
  }
};

/**
 * Get COVID-19 statistics for a specific country
 * @param {string} country - Country name or ISO code
 * @returns {Promise} Country stats data
 */
export const getCountryStats = async (country) => {
  try {
    const response = await axios.get(`${BASE_URL}/countries/${country}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching stats for ${country}:`, error);
    throw error;
  }
};

/**
 * Get historical data for a country
 * @param {string} country - Country name or ISO code
 * @param {number} lastdays - Number of days to fetch (default: 120)
 * @returns {Promise} Historical data
 */
export const getHistoricalData = async (country, lastdays = 120) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/historical/${country}?lastdays=${lastdays}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching historical data for ${country}:`, error);
    throw error;
  }
};

