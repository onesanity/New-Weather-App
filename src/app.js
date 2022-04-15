//e87dcc8ca05ed4bca8a5c243ea815556 api key

function displayTemperature(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#current-temp");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "e87dcc8ca05ed4bca8a5c243ea815556";

let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=San Diego&appid=${apiKey}&units=metric`;


axios.get(apiUrl).then(displayTemperature);