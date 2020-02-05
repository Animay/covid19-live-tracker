import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(3),
    marginTop: 'auto',
    textAlign: 'center',
    borderTop: '1px solid #e0e0e0',
  },
  text: {
    color: theme.palette.text.secondary,
    fontSize: '0.875rem',
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.footer}>
      <Typography className={classes.text}>
        COVID-19 Live Tracker Dashboard &copy; {new Date().getFullYear()}
      </Typography>
      <Typography className={classes.text} style={{ marginTop: '8px' }}>
        Data provided by{' '}
        <a
          href="https://disease.sh"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          disease.sh API
        </a>
      </Typography>
      <Typography className={classes.text} style={{ marginTop: '4px' }}>
        Built with React & Material-UI
      </Typography>
    </Box>
  );
};

export default Footer;

