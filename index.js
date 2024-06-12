const apikey =`b6b8a87e3965b8b3d3439101c358b0bb`;

const main= document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city){
    const resp = await fetch(url(city), {origin: "cors"});
    const respData = await resp.json();

    addWeatherToPage(respData);
}

function addWeatherToPage(data){
    const temp = KtoC(data.main.temp);
    const humidity = data.main.humidity;
    const weather = document.createElement('div');
    weather.classList.add('weather');

    weather.innerHTML = `
        <small>${data.name}</small>
        <h2>${temp}°C</h2>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">
        <small>${data.weather[0].main}</small>
    `;

    // cleanup
    main.innerHTML = '';

    main.appendChild(weather);
}