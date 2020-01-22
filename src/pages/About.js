import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Paper,
  Box,
  Link,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(4),
    marginBottom: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
  },
  section: {
    marginBottom: theme.spacing(3),
  },
  list: {
    paddingLeft: theme.spacing(3),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper} elevation={2}>
        <Typography variant="h4" className={classes.title}>
          About COVID-19 Live Tracker
        </Typography>

        <Box className={classes.section}>
          <Typography variant="h6" gutterBottom>
            Overview
          </Typography>
          <Typography variant="body1" paragraph>
            COVID-19 Live Tracker is a real-time dashboard that provides up-to-date
            statistics about the COVID-19 pandemic. The application displays global
            and country-specific data including total cases, recoveries, deaths, and
            active cases. It also features interactive charts showing historical trends
            over the past 120 days.
          </Typography>
        </Box>

        <Box className={classes.section}>
          <Typography variant="h6" gutterBottom>
            Features
          </Typography>
          <ul className={classes.list}>
            <li>
              <Typography variant="body1">
                Real-time global COVID-19 statistics
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Country-specific data with searchable dropdown
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Interactive line and bar charts showing historical trends
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Responsive design that works on all devices
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Last updated timestamps for data freshness
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Loading states and error handling
              </Typography>
            </li>
          </ul>
        </Box>

        <Box className={classes.section}>
          <Typography variant="h6" gutterBottom>
            Data Source
          </Typography>
          <Typography variant="body1" paragraph>
            This application uses data from the{' '}
            <Link
              href="https://disease.sh"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              disease.sh API
            </Link>
            , which provides comprehensive COVID-19 statistics from around the world.
            The data is updated regularly and includes information from various reliable
            sources including WHO, CDC, and other health organizations.
          </Typography>
        </Box>

        <Box className={classes.section}>
          <Typography variant="h6" gutterBottom>
            Technology Stack
          </Typography>
          <Typography variant="body1" paragraph>
            This project is built using modern web technologies:
          </Typography>
          <ul className={classes.list}>
            <li>
              <Typography variant="body1">React 17.x</Typography>
            </li>
            <li>
              <Typography variant="body1">React Router v5</Typography>
            </li>
            <li>
              <Typography variant="body1">Material-UI v4</Typography>
            </li>
            <li>
              <Typography variant="body1">Chart.js with react-chartjs-2</Typography>
            </li>
            <li>
              <Typography variant="body1">Axios for API calls</Typography>
            </li>
            <li>
              <Typography variant="body1">Moment.js for date formatting</Typography>
            </li>
          </ul>
        </Box>

        <Box className={classes.section}>
          <Typography variant="h6" gutterBottom>
            Disclaimer
          </Typography>
          <Typography variant="body1" paragraph>
            This dashboard is for informational purposes only. The data presented here
            is sourced from third-party APIs and may not always be 100% accurate or
            up-to-date. For official information, please refer to your local health
            authorities and organizations like the World Health Organization (WHO) and
            Centers for Disease Control and Prevention (CDC).
          </Typography>
        </Box>

        <Box className={classes.section}>
          <Typography variant="h6" gutterBottom>
            Contact & Contributions
          </Typography>
          <Typography variant="body1" paragraph>
            This is an open-source project. If you'd like to contribute, report bugs,
            or suggest features, please visit the project repository on GitHub.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default About;

