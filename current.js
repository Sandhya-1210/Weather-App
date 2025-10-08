const apiKey = "6f7152e0ea98672d7c190b9258319c64"; // Replace with your API key

function getLocationWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showWeather, showError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

async function showWeather(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    displayLocationWeather(data);
  } catch (error) {
    document.getElementById("locationWeather").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}

function displayLocationWeather(data) {
  const { name, main, weather } = data;
  const html = `
    <h2>${name}</h2>
    <p>🌡️ Temperature: ${main.temp}°C</p>
    <p>💧 Humidity: ${main.humidity}%</p>
    <p>🌥️ Condition: ${weather[0].description}</p>
  `;
  document.getElementById("locationWeather").innerHTML = html;
}

function showError(error) {
  let message = "";
  switch (error.code) {
    case error.PERMISSION_DENIED:
      message = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      message = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      message = "The request to get user location timed out.";
      break;
    default:
      message = "An unknown error occurred.";
  }
  document.getElementById("locationWeather").innerHTML = `<p style="color:red;">${message}</p>`;
}
