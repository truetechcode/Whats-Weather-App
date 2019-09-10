import { errorContent, weatherContent } from "./contentModule";
import { tempButtonFunction } from "./temperatureChangeModule";

const container = document.querySelector('div[weather] .content');

const WeatherModule = (()=>{
  const location = document.createElement('div');
  const img = document.createElement('img');
  location.classList.add('location');

  const mod = {}
  
  mod.tempArray = [];
  mod.loadWeather = (response, city) => {
    const {
      tempF, tempC, icon,
    } = response.response.ob;

    WeatherModule.tempArray = [`${tempF}&#8457;`, `${tempC}&#8451;`];

    const data = response.response
    const content = weatherContent(data, city);
    location.innerHTML = content;
    img.setAttribute('src', `https://cdn.aerisapi.com/wxicons/v2/${icon}`);
    img.setAttribute('alt', 'weather-icon');
    container.appendChild(location);
    container.appendChild(img);
    tempButtonFunction();
  },

  mod.fetchWeather = async (city, country) => {
    const url = `https://api.aerisapi.com/observations/${city},${country}?client_id=fXqdhQQAlw2yTQGiX179N&client_secret=k0y4NauNd3aeeuJljCS2DXZMClP3m9jQN5HQCQtK`;
    try {
      const response = await fetch(url, { mode: 'cors' });
      const response_1 = await response.json();
      return WeatherModule.loadWeather(response_1, city);
    }
    catch (e) {
      console.log(e);
      container.innerHTML = errorContent(city);
    }
  };

  return mod;
})();


export { WeatherModule, container };
