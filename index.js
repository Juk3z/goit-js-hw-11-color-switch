const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId;



function colorChanger() {
    let randomNumber = randomIntegerFromInterval(0, 5);
    body.style.backgroundColor = `${colors[randomNumber]}`
};


function startColorChanger(e) {
    e.currentTarget.disabled=true;
    intervalId = setInterval(colorChanger, 1000);
};

function stopColorChanger(e) {
    btnStart.disabled = false;
    clearInterval(intervalId);
};


btnStart.addEventListener('click', startColorChanger);
btnStop.addEventListener('click', stopColorChanger)

