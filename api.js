const API_KEY = "1212de04b94efdc1b9cec0354a57b06e";

async function getCurrentWeather(city){

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const res = await fetch(url);

    if(!res.ok){
        throw new Error("City not found");
    }

    return await res.json();
}


async function getForecast(city){

    const url =
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

    const res = await fetch(url);

    if(!res.ok){
        throw new Error("Forecast error");
    }

    return await res.json();
}
