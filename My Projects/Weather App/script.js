document.getElementById('search-btn').addEventListener('click', function() {
    var city = document.getElementById('search').value;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + 'd201f8ffbb5297cc485bf68a91adb2d7')
        .then(response => response.json())
        .then(data => {
            var weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>${new Date(data.dt * 1000).toDateString()}</p>
                <p>${data.weather[0].description}</p>
                <p>Temperature: ${(data.main.temp - 273.15).toFixed(1)}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
            var weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again.</p>';
        });
});
