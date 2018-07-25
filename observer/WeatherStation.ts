import WeatherData from './WeatherData';
import CurrentConditionsDisplay from './Displays/CurrentConditionsDisplay';

const weatherData = new WeatherData();
const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);

setInterval(() => {
  weatherData.setMeasurments(Math.random() * 100, Math.random() * 100, Math.random() * 1000);
}, 1000);
