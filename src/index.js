// Challenge 1 

let currentTime = new Date();
console.log(currentTime);

let day = currentTime.getDay();
console.log(day);

 let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let today = days[currentTime.getDay()];

  let hours = currentTime.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let currentDay = document.querySelector("#current-day");
currentDay.innerHTML = `${today} ${hours}:${minutes}`;

//Challenge 2

function searchCity(event) {
  event.preventDefault();
  let currentCity = document.querySelector(".current-city");
  let searchInput = document.querySelector(".search-input");
  currentCity.innerHTML = searchInput.value;
}

let form = document.querySelector("form");
form.addEventListener("submit", searchCity);



