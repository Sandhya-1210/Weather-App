const apiKey = "6f7152e0ea98672d7c190b9258319c64"; // Replace with your API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found!");
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}


// const apiKey = "6f7152e0ea98672d7c190b9258319c64";
// const suggestionLimit = 5;

// async function suggestCities() {
//   const input = document.getElementById("cityInput").value.trim();
//   const suggestionsDiv = document.getElementById("suggestions");
//   if (input.length < 2) {
//     suggestionsDiv.innerHTML = "";
//     return;
//   }

//   const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(input)}&limit=${suggestionLimit}&appid=${apiKey}`;
//   try {
//     const response = await fetch(geoUrl);
//     const cities = await response.json();
//     let html = "";
//     cities.forEach(city => {
//       html += `<li onclick="chooseCity('${city.name},${city.country}')"
//               style="padding:6px;cursor:pointer;">${city.name}, ${city.country}</li>`;
//     });
//     suggestionsDiv.innerHTML = html;
//   } catch (error) {
//     suggestionsDiv.innerHTML = "";
//   }
// }

// function chooseCity(selected) {
//   document.getElementById("cityInput").value = selected;
//   document.getElementById("suggestions").innerHTML = "";
//   getWeather();
// }

// async function getWeather() {
//   const city = document.getElementById("cityInput").value;
//   if (!city) {
//     alert("Please enter a city name!");
//     return;
//   }
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//   try {
//     const response = await fetch(url);
//     if (!response.ok) throw new Error("City not found!");
//     const data = await response.json();
//     displayWeather(data);
//   } catch (error) {
//     document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
//   }
// }

// Existing displayWeather function remains unchanged


function displayWeather(data) {
  const { name, main, weather } = data;
  const html = `
    <h2>${name}</h2>
    <p>🌡️ Temperature: ${main.temp}°C</p>
    <p>💧 Humidity: ${main.humidity}%</p>
    <p>🌥️ Condition: ${weather[0].description}</p>
  `;
  document.getElementById("weatherResult").innerHTML = html;
}
