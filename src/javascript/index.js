import { WeatherModule } from './weatherModule';
import { DomModule } from './weatherDomModule';

const form = document.querySelector('div[weather] #weather-form');

form.addEventListener('submit', (event) => {
  const city = document.querySelector('div[weather] form > input[name="city"]').value.toLowerCase();
  const country = document.querySelector('div[weather] form > input[name="country"]').value.toLowerCase();
  DomModule.dataLoading(city);
  WeatherModule.fetchWeather(city, country);
  form.reset();
  event.preventDefault();
});
