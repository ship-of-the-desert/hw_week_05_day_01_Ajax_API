
var button= document.querySelector('button');

button.addEventListener('click', function (event) {
    event.preventDefault();
    var input= document.querySelector('input').value;
    console.log(input);
    
    axios({
        method: 'get',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=8733170b976a42d28912c2fb5faa0f57`
    })
    .then(response => {
        //4434663, (32°F − 32) × 5/9
        console.log(response);
        console.log(response.data.main.temp);
        document.querySelector('#cityname').innerText= `city:\n ${input}`;
        document.querySelector('#temp').innerText= `temperature:\n ${Math.floor((response.data.main.temp-273.15))}C`; 
        document.querySelector('#weather').innerText= `weather:\n ${response.data.weather[0].main}, ${response.data.weather[0].description}`;
        document.querySelector('#humidity').innerText= `humidity:\n ${response.data.main.humidity}%`;
        document.querySelector('#visibility').innerText= `visibility:\n ${response.data.visibility}`;
        document.querySelector('#wind').innerText= `wind speed:\n ${response.data.wind.speed} m/s`;
        document.querySelector('#clouds').innerText= `clouds:\n ${response.data.clouds.all}%`;
    })
})

