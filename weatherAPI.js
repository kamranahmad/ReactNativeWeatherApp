const rootUrl = 'api.openweathermap.org/data/2.5/weather?appid={APIKEY}';

export const fetchWeather = (lat, lon) => {
    const url = rootUrl + "&lat=" +lat + "&lon=" + lon;
    console.log(url);

    return fetch(url)
        .then(res => res.json())
        .then(json => ({
            temp: json.main.temp,
            weather: json.weather[0].main
        }));
}