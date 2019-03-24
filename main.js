function cityWeather() {
    var cityName = $('#cityName').val();
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=b969bad5b487e3cd8747908fce3c6f2c';

    $.getJSON(url, weather);

    function weather(data) {
        var cityName = data.name;
        var temp = data.main.temp;
        var condition = data.weather[0].main;
        var wind = data.wind.speed;
        // console.log(data);

        $('.weatherDetails').append("<b>The weather in</b> " + cityName + " <b> is: </b> <br>" + "<b> Temprature: </b>" + temp + "<br><b>Condition: </b>" + condition + "<br><b> Wind Speed: </b>" + wind + "<br><br>");

    }
}