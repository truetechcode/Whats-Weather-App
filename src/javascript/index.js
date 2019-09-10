import { WeatherModule, container } from './weatherModule';

const form = document.querySelector('div[weather] #weather-form');

form.addEventListener('submit', (event) => {
  const city = document.querySelector('div[weather] form > input[name="city"]').value.toLowerCase();
  const country = document.querySelector('div[weather] form > input[name="country"]').value.toLowerCase();
  container.innerHTML = '';
  WeatherModule.fetchWeather(city, country);
  form.reset();
  event.preventDefault();
});
