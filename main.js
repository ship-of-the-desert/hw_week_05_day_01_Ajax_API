//$(document).ready(function(){
//$('#submitWeather').click(function(){
 
        
       
function weather() {
    var cityName = $('#cityName').val();
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=fb63f61bac384b0429d3ceea3379f796';

     $.getJSON(url, weatherDetails);

     function weatherDetails (data) {
        var cityName = data.name;
        var temp = (data.main.temp).toFixed(1);
        var condition = data.weather[0].main;
        var wind = data.wind.speed;
        // console.log(data);

         $('.show').append("The weather in  " + cityName + "  is: <br>" + 
         " Temprature: " + temp + "<br>Condition: " + condition + 
         "<br> Wind Speed: " + wind + "<br><br>");

     }
} 
        
