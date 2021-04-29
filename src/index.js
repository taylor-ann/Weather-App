let now = new Date();
let currentDate = document.querySelector("#current-date");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let dateTime = `${day} ${hours}:${minutes}`;
document.getElementById("current-date").innerHTML = dateTime;

//search city
function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#display-city");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;

  search(searchInput.value);
}
function search(city) {
  let apiKey = "c6c31d723664fecd685ff24479371099";
  let units = "metric";
  let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndPoint}?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(getTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("click", searchCity);

function getTemperature(response) {
  console.log(response);
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
}

function getPosition(position) {
  let city = document.querySelector("#display-city").value;
  let apiKey = "c6c31d723664fecd685ff24479371099";
  let units = "metric";
  let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndPoint}?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(getTemperature);
}
navigator.geolocation.getCurrentPosition(getPosition);

//temperature
function changeTempCelsius(event) {
  event.preventDefault();
  let currentTempC = document.querySelector("#temp");
  currentTempC.innerhtml = "23°C";
}

function changeTempFahrenheit(event) {
  event.preventDefault();
  let currentTempF = document.querySelector("#temp");
  currentTempF.innerHTML = "73°F";
}

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", changeTempCelsius);

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", changeTempFahrenheit);

//get city and temperature
