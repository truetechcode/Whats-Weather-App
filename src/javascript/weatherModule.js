const loadWeather = (ci, co) => {
  const container = document.querySelector('div[weather] p');
  const url = `https://api.aerisapi.com/observations/${ci},${co}?client_id=fXqdhQQAlw2yTQGiX179N&client_secret=k0y4NauNd3aeeuJljCS2DXZMClP3m9jQN5HQCQtK`;
  fetch(url, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      console.log(ci, co);
      const {
        weather, tempF, tempC, humidity, icon, isDay, windDir,
      } = response.response.ob;
      const { country, name, state } = response.response.place;
      const { lat, long } = response.response.loc;
      container.innerHTML = `The current weather in ${state} is ${weather.toLowerCase()} with a temperature of ${tempF}&deg;`;
    })
    .catch((error) => {
      console.error(error);
    });
};


export { loadWeather };
