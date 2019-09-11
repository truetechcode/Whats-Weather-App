import { DomModule } from './weatherDomModule';

const WeatherModule = (() => {
  const mod = {};

  mod.fetchWeather = (city, country) => {
    const url = `https://api.aerisapi.com/observations/${city},${country}?client_id=fXqdhQQAlw2yTQGiX179N&client_secret=k0y4NauNd3aeeuJljCS2DXZMClP3m9jQN5HQCQtK`;
    return fetch(url, { mode: 'cors' })
      .then(response => response.json())
      .then(response => DomModule.loadWeather(response, city))
      .catch(() => {
        DomModule.errorReport(city);
      });
  };

  return mod;
})();


export { WeatherModule };
