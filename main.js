const API_KEY = ''


const icons = {
    cloudy: 'https://image.flaticon.com/icons/svg/1163/1163624.svg',
    sunny: 'https://image.flaticon.com/icons/svg/979/979585.svg',
    rainy: 'https://image.flaticon.com/icons/svg/414/414974.svg',
    sandstorm: 'https://image.flaticon.com/icons/svg/414/414974.svg'}

const sampleCities = ['Dammam', 'Riyadh', 'Jeddah', 'Mecca']

for (let i = 0; i < sampleCities.length; i++) {
    var URL = `http://api.openweathermap.org/data/2.5/weather?q=${sampleCities[i]}&APPID=${API_KEY}`

    axios({
        method:'get',
        url: URL
      })
        .then(function (response) {
            document.querySelector(`#card-${i+1} h5`).textContent = sampleCities[i]
            document.querySelector(`#card-${i+1} li`).textContent = Math.floor(response.data.main.temp) + ` Degrees F`

            if(response.data.weather[0].main.includes('Cloud')) {
                document.querySelector(`#card-${i+1} img`).setAttribute('src', icons.cloudy)
            }
            else if (response.data.weather[0].main.includes('Thunderstorm') || response.data.weather[0].main.includes('Rain')) {
                document.querySelector(`#card-${i+1} img`).setAttribute('src', icons.rainy)
            }
            else if(response.data.weather[0].main.includes('Sun')) {
                document.querySelector(`#card-${i+1} img`).setAttribute('src', icons.sunny)
            }
            else if(response.data.weather[0].main.includes('Sand')) {
                document.querySelector(`#card-${i+1} img`).setAttribute('src', icons.sandstorm)
            }

        });
}

document.querySelector('#search').addEventListener('click', function() {

    var city = document.querySelector('#city').value;
    const URL_FORCAST = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&appid=${API_KEY}`

    axios({
        method: 'get',
        url: URL
    })
    .then(function (response) {

        document.querySelector(`#city-name`).textContent = city;
        document.querySelector(`#temp`).textContent = `City: ${Math.floor(response.data.main.temp)} Degrees F`;
        document.querySelector(`#current-condition`).textContent = `Condition: ${response.data.weather[0].main}`;

    });
});

