import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  loaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '200px',
    padding: theme.spacing(4),
  },
  loaderText: {
    marginTop: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const Loader = ({ message = 'Loading data...' }) => {
  const classes = useStyles();

  return (
    <Box className={classes.loaderContainer}>
      <CircularProgress size={50} />
      <Typography variant="body1" className={classes.loaderText}>
        {message}
      </Typography>
    </Box>
  );
};

export default Loader;

