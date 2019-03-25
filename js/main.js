axios({ 
    method : 'Get',
    url : 'api.openweathermap.org/data/2.5/weather?q=London&appid=3f71c956fa83188745655493d058a64a'
})
.then(Response => {
    console.log(Response)
    document.querySelector(".cityWeather").textContent(Response);
    
});