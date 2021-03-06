import { DomModule } from './weatherDomModule';

const tempButtonFunction = () => {
  const tempButton = document.querySelector('#temp-button');
  const tempHolder = document.querySelector('#temp-holder');
  const [tempF, tempC] = DomModule.tempArray;
  let tempCount = 1;

  tempButton.addEventListener('click', (e) => {
    if (tempCount % 2 === 0) {
      tempHolder.innerHTML = tempF;
    } else {
      tempHolder.innerHTML = tempC;
    }
    tempCount += 1;
    e.preventDefault();
  });
};

export { tempButtonFunction };
