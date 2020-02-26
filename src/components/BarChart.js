import React from 'react';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  chartContainer: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: 600,
  },
}));

const BarChart = ({ data, title = 'COVID-19 Statistics' }) => {
  const classes = useStyles();

  const chartData = {
    labels: data?.labels || [],
    datasets: [
      {
        label: 'Cases',
        data: data?.cases || [],
        backgroundColor: '#2196f3',
        borderColor: '#1976d2',
        borderWidth: 1,
      },
      {
        label: 'Recovered',
        data: data?.recovered || [],
        backgroundColor: '#4caf50',
        borderColor: '#388e3c',
        borderWidth: 1,
      },
      {
        label: 'Deaths',
        data: data?.deaths || [],
        backgroundColor: '#f44336',
        borderColor: '#d32f2f',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      xAxes: [
        {
          ticks: {
            maxTicksLimit: 10,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            callback: function (value) {
              if (value >= 1000000) {
                return (value / 1000000).toFixed(1) + 'M';
              } else if (value >= 1000) {
                return (value / 1000).toFixed(1) + 'K';
              }
              return value;
            },
          },
        },
      ],
    },
    legend: {
      display: true,
      position: 'top',
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
  };

  return (
    <Paper className={classes.chartContainer} elevation={2}>
      <Typography variant="h6" className={classes.title}>
        {title}
      </Typography>
      <Bar data={chartData} options={options} />
    </Paper>
  );
};

export default BarChart;

