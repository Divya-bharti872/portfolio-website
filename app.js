const input = document.getElementById("cityInput");
const btn = document.getElementById("searchBtn");

const currentDiv = document.getElementById("currentWeather");
const forecastDiv = document.getElementById("forecast");
const loading = document.getElementById("loading");
const error = document.getElementById("error");


btn.addEventListener("click", () => {
    const city = input.value.trim();
    if(city !== ""){
        loadWeather(city);
    }
});


async function loadWeather(city){

    loading.classList.remove("hide");
    error.textContent = "";
    currentDiv.innerHTML = "";
    forecastDiv.innerHTML = "";

    try{

        const current = await getCurrentWeather(city);
        const forecast = await getForecast(city);

        showCurrent(current);
        showForecast(forecast);

        saveCity(city);

    }catch(err){
        error.textContent = err.message;
    }

    loading.classList.add("hide");
}


function showCurrent(data){

    currentDiv.innerHTML = `
        <h3>${data.name}</h3>
        <p>Temp: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].main}</p>
    `;
}


function showForecast(data){

    const list = data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    );

    list.forEach(day => {

        const div = document.createElement("div");
        div.className = "box";

        div.innerHTML = `
            <p>${day.dt_txt.slice(0,10)}</p>
            <p>${day.main.temp}°C</p>
        `;

        forecastDiv.appendChild(div);
    });
}


/* Load saved city */

const savedCity = getSavedCity();

if(savedCity){
    input.value = savedCity;
    loadWeather(savedCity);
}
