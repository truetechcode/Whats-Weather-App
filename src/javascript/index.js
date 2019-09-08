import { loadWeather, container, tempArray } from './weatherModule';

const form = document.querySelector('div[weather] #weather-form');
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

form.addEventListener('submit', (event) => {
  const city = document.querySelector('div[weather] form > input[name="city"]').value.toLowerCase();
  const country = document.querySelector('div[weather] form > input[name="country"]').value.toLowerCase();
  container.innerHTML = "";
  loadWeather(city, country);
  setTimeout(() => {
    clickB();    
  }, 3000);
  // form.reset();
  event.preventDefault();
});
