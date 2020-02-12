import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Box } from '@material-ui/core';
import {
  LocalHospital,
  Healing,
  Cancel,
  TrendingUp,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    borderRadius: '8px',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: theme.shadows[6],
    },
  },
  cardContent: {
    padding: theme.spacing(2),
  },
  title: {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  value: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  icon: {
    marginRight: theme.spacing(1),
    fontSize: '1.5rem',
  },
  cases: {
    color: '#2196f3',
  },
  recovered: {
    color: '#4caf50',
  },
  deaths: {
    color: '#f44336',
  },
  active: {
    color: '#ff9800',
  },
}));

const StatsCard = ({ title, value, type, icon: Icon }) => {
  const classes = useStyles();

  const getTypeClass = () => {
    switch (type) {
      case 'cases':
        return classes.cases;
      case 'recovered':
        return classes.recovered;
      case 'deaths':
        return classes.deaths;
      case 'active':
        return classes.active;
      default:
        return '';
    }
  };

  const getDefaultIcon = () => {
    switch (type) {
      case 'cases':
        return <TrendingUp className={classes.icon} />;
      case 'recovered':
        return <Healing className={classes.icon} />;
      case 'deaths':
        return <Cancel className={classes.icon} />;
      case 'active':
        return <LocalHospital className={classes.icon} />;
      default:
        return null;
    }
  };

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Box className={classes.iconContainer}>
          {Icon ? (
            <Icon className={`${classes.icon} ${getTypeClass()}`} />
          ) : (
            getDefaultIcon()
          )}
          <Typography className={classes.title}>{title}</Typography>
        </Box>
        <Typography className={`${classes.value} ${getTypeClass()}`}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatsCard;

