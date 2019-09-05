import { loadWeather } from './weatherModule';

const city = document.querySelector('div[weather] form > input[name="city"]').value;
const country = document.querySelector('div[weather] form > input[name="country"]').value;
const form = document.querySelector('div[weather] form');

form.addEventListener('submit', (event) => {
  loadWeather(city, country);
  form.reset();
  event.preventDefault();
});
