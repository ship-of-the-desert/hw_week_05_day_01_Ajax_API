
//$(".btn").on('click', getWeather)
$(document).ready(function(){
    $(".btn").click(function() {

    let userInput = document.getElementsByName('city')[0].value;
    console.log(userInput);

    let url = `https://api.openweathermap.org/data/2.5/weather?${userInput}&units=metric&APPID=68ef007df9b72be6e5a39c39abf2e974`

    //let url = "http://openweathermap.org/forecast16#JSON"
    $.get(url, function (data) {
        console.log(data);

        $(".weather").append(`<li> ${data.sys.name}</li>`)
        $(".weather").append(`<li> ${data.weather}</li>`)
        $(".weather").append(`<li> ${data.main.temp}</li>`)

    })

})})