# COVID-19 Live Tracker Dashboard

A real-time COVID-19 statistics dashboard built with React. This project helps you visualize global and country-specific pandemic data with interactive charts and up-to-date statistics.

_Note: This project was originally created in 2020 during the early stages of the COVID-19 pandemic._

## Overview

This is a web application I built to track COVID-19 statistics in rea-time. It shows you global numbers and lets you drill down into specific countries to see how the pandemic has evolved. The dashboard pulls live data and displays it in an easy-to-understand format with charts and cards

What you can do with it:
- View global statistics including total cases, recoveries, deaths, and active cases
- Explore country-specific data for any country in the world
- See historical trends over the past 120 days with interactive charts
- Get real-time updates as new data comes in
- Use it on any device - it works on desktop, tablet, and mobile

## Features

Here's what the dashboard includes:
- Real-time global COVID-19 statistics that update automatically
- A country dropdown selector so you can pick any country and see its data
- Interactive line charts that show how cases, recoveries, and deaths have changed over time
- Bar charts for comparing different metrics side by side
- A clean interface built with Material-UI
- Timestamps showing when the data was last updated
- Loading indicators so you know when data is being fetched
- Error handling in case something goes wrong with the API
- A responsive layout that looks good on any screen size
- Smooth animations that make the interface feel polished

## Tech Stack

I built this using technologies that were popular in 2020:

- React 17.0.2 - The main UI library
- React Router v5.3.0 - For navigating between pages
- Material-UI v4.12.3 - For the component library and styling
- Chart.js 2.9.4 - For rendering the charts
- react-chartjs-2 2.11.2 - React wrapper for Chart.js
- Axios 0.21.1 - For making API calls
- Moment.js 2.29.1 - For formatting dates and times
- Create React App 4.0.3 - For the build setup

## Installation

Before you start, make sure you have Node.js (version 14 or higher) and npm installed on your computer.

Here's how to get it running:

1. Clone the repository to your local machine:
```bash
git clone https://github.com/Animay/covid19-live-tracker.git
cd covid19-live-tracker
```

2. Install all the dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

If you're using Node.js version 17 or higher, you might need to run it with the legacy OpenSSL provider:
```bash
$env:NODE_OPTIONS="--openssl-legacy-provider"; npm start
```

4. Open your browser and go to http://localhost:3000

That's it! The app should be running now.

## Project Structure

Here's how the code is organized:

```
covid19-live-tracker/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── api/
│   │   └── covid.js              # Functions for fetching COVID-19 data
│   ├── components/
│   │   ├── Header.js              # The navigation bar at the top
│   │   ├── Footer.js              # Footer at the bottom
│   │   ├── StatsCard.js           # Cards that display statistics
│   │   ├── CountrySelector.js     # Dropdown for selecting countries
│   │   ├── LineChart.js           # Component for line charts
│   │   ├── BarChart.js            # Component for bar charts
│   │   └── Loader.js              # Loading spinner
│   ├── pages/
│   │   ├── Home.js                # Main dashboard page
│   │   └── About.js                # About page with project info
│   ├── utils/
│   │   └── formatNumbers.js       # Helper functions for formatting numbers
│   ├── App.js                     # Main app component with routing
│   ├── index.js                   # Entry point
│   ├── index.css                  # Global styles
│   └── styles.css                 # Additional styles
├── package.json
├── .gitignore
└── README.md
```

## API Endpoints

The app gets its data from the disease.sh API. Here are the endpoints I'm using:

- Global Stats: `https://disease.sh/v3/covid-19/all`
- Countries List: `https://disease.sh/v3/covid-19/countries`
- Country Stats: `https://disease.sh/v3/covid-19/countries/{country}`
- Historical Data: `https://disease.sh/v3/covid-19/historical/{country}?lastdays=120`

If the API goes down or changes, you can update these endpoints in the `src/api/covid.js` file.

## Screenshots

I've included placeholder sections for screenshots. You can add your own screenshots to show what the app looks like:
- Home page showing global statistics
- Country-specific view with detailed data
- Charts displaying historical trends

Just add your screenshots to a `screenshots/` directory and update the paths in this README.

## How to Use

### Viewing Global Statistics

When you first open the app, you'll see the global statistics. The dashboard automatically loads the worldwide numbers, showing you total cases, recoveries, deaths, and active cases. Everything updates in real-time as new data comes in.

### Viewing Country-Specific Data

Want to see data for a specific country? Just use the dropdown selector at the top of the page. Pick any country from the list, and you'll see:
- That country's current statistics
- Historical charts showing how the situation has changed over the past 120 days
- Today's numbers compared to previous days

### Understanding the Charts

The line chart shows you trends over time - you can see how cases, recoveries, and deaths have changed day by day. The bar chart gives you a side-by-side comparison, which is useful for understanding the relationship between different metrics.

## Available Scripts

Here are the commands you can run:

- `npm start` - Starts the development server so you can work on the app
- `npm build` - Creates a production build that you can deploy
- `npm test` - Runs the test suite (if you add tests)
- `npm eject` - Ejects from Create React App (be careful, this is permanent)

## Contributing

I'd love to see contributions! If you have ideas for improvements or find bugs, feel free to submit a pull request. Here's how:

1. Fork the repository
2. Create a new branch for your feature (`git checkout -b feature/your-feature-name`)
3. Make your changes and commit them (`git commit -m 'Add your feature'`)
4. Push to your branch (`git push origin feature/your-feature-name`)
5. Open a pull request on GitHub

## License

This project is open source and available under the MIT License. Feel free to use it, modify it, and share it.

## Disclaimer

Just a heads up - this dashboard is for informational purposes only. The data comes from third-party APIs, and while I try to keep it accurate, I can't guarantee it's always 100% up-to-date or error-free. For official information and health advice, please check with your local health authorities or trusted organizations like:

- World Health Organization (WHO) - https://www.who.int
- Centers for Disease Control and Prevention (CDC) - https://www.cdc.gov

## Credits

I couldn't have built this without these great resources:
- Data provided by the disease.sh API
- Built with React
- UI components from Material-UI
- Charts powered by Chart.js

## Contact

If you have questions, suggestions, or run into any issues, please open an issue on GitHub. I'll do my best to help out.

---

Stay safe and stay informed. We'll get through this together.
