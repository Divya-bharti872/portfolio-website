function saveCity(city){
    localStorage.setItem("city", city);
}

function getSavedCity(){
    return localStorage.getItem("city");
}
