import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { LocalHospital } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#1976d2',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  navButtons: {
    display: 'flex',
    gap: theme.spacing(1),
  },
  navButton: {
    color: 'white',
    textTransform: 'none',
    fontWeight: 500,
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  activeButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
}));

const Header = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          className={classes.title}
        >
          <LocalHospital className={classes.icon} />
          COVID-19 Live Tracker
        </Typography>
        <div className={classes.navButtons}>
          <Button
            component={Link}
            to="/"
            className={`${classes.navButton} ${
              location.pathname === '/' ? classes.activeButton : ''
            }`}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            className={`${classes.navButton} ${
              location.pathname === '/about' ? classes.activeButton : ''
            }`}
          >
            About
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

