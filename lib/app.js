/* eslint-disable no-console */
// import dependencies
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import request from 'superagent';
import mungeLocation, { mungeWeather } from '../utils.js';

// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());
// read JSON from body of request when indicated by Content-Type
app.use(express.json());
// enhanced logging
app.use(morgan('dev'));

// heartbeat route
app.get('/', (req, res) => {
  res.send('Proxy API');
});

app.get('/location', async (req, res) => {
  try {
    const URL = `https://us1.locationiq.com/v1/search.php?key=${process.env.Location_DB_API_KEY}&q=${req.query.search}&format=json`;
    const data = await request.get(URL);
    const newData = mungeLocation(data.body);
    res.json(newData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/weather', async (req, res) => {
  try {
    const URL = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${req.query.latitude}&lon=${req.query.longitude}&key=${process.env.WEATHER_DB_API_KEY}`;
    const data = await request.get(URL);
    const newData = mungeWeather(data.body);
    res.json(newData);
  }
  catch (err) {
    res.status(500).json({ errorr: err.message });
  }
});






export default app;