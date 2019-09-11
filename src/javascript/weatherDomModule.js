import { errorContent, weatherContent } from './contentModule';
import { tempButtonFunction } from './temperatureChangeModule';

const container = document.querySelector('div[weather] .content');

const DomModule = (() => {
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

    DomModule.tempArray = [`${tempF}&#8457;`, `${tempC}&#8451;`];

    location.classList.add('location');
    location.innerHTML = content;
    img.setAttribute('src', `https://cdn.aerisapi.com/wxicons/v2/${icon}`);
    img.setAttribute('alt', 'weather-icon');
    container.innerHTML = '';
    container.appendChild(location);
    container.appendChild(img);
    tempButtonFunction();
  };

  mod.errorReport = (city) => {
    container.innerHTML = errorContent(city);
  };

  mod.dataLoading = (city) => {
    container.innerHTML = `<p id="loading">Loading... data for ${city}!</p>`;
  };

  return mod;
})();

export { DomModule };
