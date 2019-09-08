const container = document.querySelector('div[weather] .content');
const location = document.createElement('div');
const img = document.createElement('img');
location.classList.add('location')

const loadWeather = (ci, co) => {
  const url = `https://api.aerisapi.com/observations/${ci},${co}?client_id=fXqdhQQAlw2yTQGiX179N&client_secret=k0y4NauNd3aeeuJljCS2DXZMClP3m9jQN5HQCQtK`;
  fetch(url, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      if (response.error === null) {
        const {
          weather, tempF, tempC, humidity, icon, isDay, windDir,
        } = response.response.ob;
        const { lat, long } = response.response.loc;
        const content = `          <p class="header">
        Location: <span>${ci}, ${co}</span>
      </p>
      <p>            
        Lat: <span>${lat}</span>
      </p>
      <p>
        Long: <span>${long}</span>
      </p>
      <p class="description">
        <p>Weather: <span>${weather.toLowerCase()}</span></p>
        <p>Temperature: <span>${tempF}&#8457; - ${tempC}&#8451;</span> <button>&#8457; / &#8451;</button></p>            
      </p>`;
        location.innerHTML = content;
        img.setAttribute('src', 'https://cdn.aerisapi.com/wxicons/v2/' + icon);
        img.setAttribute('alt', 'weather-icon');
        container.appendChild(location)
        container.appendChild(img)
      } else {
        container.innerHTML = response.error.description;// `The weather data for ${ci}, ${co} is ${weather.toLowerCase()} with a temperature of ${tempF}&deg;`;
      }
    })
    .catch((error) => console.log('Error:', error));
};


export { loadWeather, container };
