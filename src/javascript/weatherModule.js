import { errorContent, weatherContent } from './contentModule';
import { tempButtonFunction } from './temperatureChangeModule';

const container = document.querySelector('div[weather] .content');

const WeatherModule = (() => {
  const mod = {};

  mod.tempArray = [];
  mod.loadWeather = (response, city) => {
    const location = document.createElement('div');
    const img = document.createElement('img');
    const data = response.response;
    const content = weatherContent(data, city);
    const {
      tempF, tempC, icon,
    } = response.response.ob;

    WeatherModule.tempArray = [`${tempF}&#8457;`, `${tempC}&#8451;`];

    location.classList.add('location');
    location.innerHTML = content;
    img.setAttribute('src', `https://cdn.aerisapi.com/wxicons/v2/${icon}`);
    img.setAttribute('alt', 'weather-icon');
    container.innerHTML = '';
    container.appendChild(location);
    container.appendChild(img);
    tempButtonFunction();
  };

  mod.fetchWeather = (city, country) => {
    const url = `https://api.aerisapi.com/observations/${city},${country}?client_id=fXqdhQQAlw2yTQGiX179N&client_secret=k0y4NauNd3aeeuJljCS2DXZMClP3m9jQN5HQCQtK`;
    return fetch(url, { mode: 'cors' })
      .then((response) => response.json())
      .then((response) => WeatherModule.loadWeather(response, city))
      .catch(() => {
        container.innerHTML = errorContent(city);
      });
  };

  return mod;
})();


export { WeatherModule, container };
