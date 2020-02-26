import React from 'react';
import { Line } from 'react-chartjs-2';
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

const LineChart = ({ data, title = 'COVID-19 Trends' }) => {
  const classes = useStyles();

  const chartData = {
    labels: data?.labels || [],
    datasets: [
      {
        label: 'Cases',
        data: data?.cases || [],
        borderColor: '#2196f3',
        backgroundColor: 'rgba(33, 150, 243, 0.1)',
        borderWidth: 2,
        fill: true,
        lineTension: 0.4,
      },
      {
        label: 'Recovered',
        data: data?.recovered || [],
        borderColor: '#4caf50',
        backgroundColor: 'rgba(76, 175, 80, 0.1)',
        borderWidth: 2,
        fill: true,
        lineTension: 0.4,
      },
      {
        label: 'Deaths',
        data: data?.deaths || [],
        borderColor: '#f44336',
        backgroundColor: 'rgba(244, 67, 54, 0.1)',
        borderWidth: 2,
        fill: true,
        lineTension: 0.4,
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
      <Line data={chartData} options={options} />
    </Paper>
  );
};

export default LineChart;

