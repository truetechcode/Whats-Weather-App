const container = document.querySelector('div[weather] .content');
const location = document.createElement('div');
const img = document.createElement('img');
location.classList.add('location');
let tempArray = [];
let tempCount = 1;

const clickB = () => {
  const tempButton = document.querySelector('#temp-button');
  const tempHolder = document.querySelector('#temp-holder');
  tempButton.addEventListener('click', (e) => {
    if(tempCount % 2 === 0){
      tempHolder.innerHTML = tempArray[0]
    }else{
      tempHolder.innerHTML = tempArray[1]
    }
    tempCount++
    })
}

const loadWeather = (ci, co) => {
  const url = `https://api.aerisapi.com/observations/${ci},${co}?client_id=fXqdhQQAlw2yTQGiX179N&client_secret=k0y4NauNd3aeeuJljCS2DXZMClP3m9jQN5HQCQtK`;
  fetch(url, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      if (response.error === null) {
        const {
          weather, tempF, tempC, icon, isDay,
        } = response.response.ob;
        tempArray = [`${tempF}&#8457;`,`${tempC}&#8451;`];
        const { lat, long } = response.response.loc;
        const content = `<p class="header">
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
        <p>Temperature: <span id="temp-holder">${tempF}&#8457;</span> <button id="temp-button">&#8457; / &#8451;</button></p>            
      </p>`;
        location.innerHTML = content;
        img.setAttribute('src', 'https://cdn.aerisapi.com/wxicons/v2/' + icon);
        img.setAttribute('alt', 'weather-icon');
        container.appendChild(location)
        container.appendChild(img)
        clickB();
      } else {
        container.innerHTML = `<p>Sorry! The weather data for ${ci}, ${co} is not available, try again later.</p>`;
      }
    })
    .catch((error) => {
      container.innerHTML = `<p>Sorry! The weather data for ${ci}, ${co} is not available, try again later.</p>`;
    });
};



export { loadWeather, container, tempArray};
