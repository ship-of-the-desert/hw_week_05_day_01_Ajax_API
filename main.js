//function weather that holds input as an argument 
//input holds value user has entered 
function weather(input) {
    var input= document.querySelector('input').value;

//method get that returns weather based on users input
axios({
    method: 'get',
    url: `api.openweathermap.org/data/2.5/weather?q=${input}APPID=3c6daf6ef3b7b6d1ccdb455002a7ef7a`    
})

//promise 
.then(response => {

    //creates element and assign each to variable
    var cityName = document.createElement('h3');
    var temperature = document.createElement('h5');
    var condition = document.createElement('h5');
    var description = document.createElement('p');

    //change HTML content of each created element tags 
    cityName.innerHTML= "City name "+response.name;
    temperature.innerHTML= "Weather temp "+response.main.temp;
    condition.innerHTML= "Weather condition "+response.forecast.symbol.name;
    description.innerHTML= "Weather Description "+response.weather.description;

    //append each element div that with class info 
    info.appendChild(cityName); 
    info.appendChild(temperature);
    info.appendChild(condition);
    info.appendChild(description);
})}

//Attach event listener to the onclick button that calls function weather
document.querySelector(".search").addEventListener('click',weather)