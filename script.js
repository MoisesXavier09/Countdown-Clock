const container = document.querySelector(".container");

let date = new Date().getDate();
let hours = new Date().getHours();
let mins = new Date().getMinutes();
let secs = new Date().getSeconds();
let time = new Array(date, hours, mins, secs)

setInterval(() => {
    time[0] = new Date().getDate();
    time[1] = new Date().getHours();
    time[2] = new Date().getMinutes();
    time[3] = new Date().getSeconds();
    displayItems(time)
}, 1000);

function displayItems(time) {
  let elements = `<div class="box">${time[0]} <p>Dias</p></div>
                    <div class="box">${time[1]} <p>Horas</p></div>
                    <div class="box">${time[2]} <p>Minutos</p></div>
                    <div class="box">${time[3]} <p>Segundos</p></div>`;
  container.innerHTML = elements;
}

const data = new Date();
const formatador = new Intl.DateTimeFormat('pt-BR', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});
const dataFormatada = formatador.format(data);

document.addEventListener("DOMContentLoaded", () => {
  displayItems(time);
  document.querySelector('.date').innerHTML = dataFormatada
});
