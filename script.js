
document.addEventListener("DOMContentLoaded", () => {
    let apiKey = 'e3dcf4efcafdfc57e5a5be0a39610aea';
    // let city = 'London';

    let input = document.querySelector("#se");

    let subm = document.querySelector('button')
    let weatherinfo = document.querySelector(".info");
    subm.addEventListener('click', function () {
        let city = input.value.trim()  //trim----hek cdo space mes fjaleve
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl).then(Response => Response.json()).then(data => {

            let temperature = data.main.temp;
            let description = data.weather[0].description;
            let icon = data.weather[0].icon;
            let wind = data.wind.speed;

            weatherinfo.innerHTML = `
    <h2> ${city}</h2>
    <img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather-icon">
    <p> ${description}</p>
    <p> Temperature: ${temperature}°C</p>
     <p>wind speed: ${wind}</p>`;
        })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                const weatherInfo = document.querySelector('.info');
                weatherInfo.innerHTML = '<p>Ate qe po kerkoni nuk gjendet</p>';
            });
    })





})
