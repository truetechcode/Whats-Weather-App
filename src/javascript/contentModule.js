const errorContent = (city) => `<p>Sorry! The weather data for ${city} is not available, try again later.</p>`;
const weatherContent = (response, city) => {
  const {
    weather, tempF,
  } = response.ob;
  const { lat, long } = response.loc;
  return `<p class="header">
  Location: <span>${city}</span>
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
};

export { errorContent, weatherContent };
