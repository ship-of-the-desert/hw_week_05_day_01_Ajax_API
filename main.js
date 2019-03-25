//$(document).ready(function(){
//$('#submitWeather').click(function(){
    $("#submitWeather").click(function(){
        let input = $('#input').val()
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=fb63f61bac384b0429d3ceea3379f796`
        
        
        $.get(url, function(data){
            let city = data.name
            let country = data.sys.country
            let weatherDesc = data.weather[0].main
            let temp = (data.main.temp - 273.15).toFixed(1)



         $('#city').text(city);
         $('#country').text(country)
         $('#weatherDesc').text(weatherDesc)
         $('#temp').text(temp)



//    var url = 'api.openweathermap.org/data/2.5/weather?q=' + city +
//     '&APPID=fb63f61bac384b0429d3ceea3379f796';
// }

    
// $.getJSON(url, weatheDetails);

// function weatheDetails(data){
//     var city = data.name;
//     var temp = data.main.temp;
//     var condition = data.weather[0].main;