$("button").click(function(){
    let input = $('#input').val()
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=dfdc971b52267b8d2c7538e630f89340`
    $.get(url, function(data){
        let city = data.name
        let country = data.sys.country
        let weatherDesc = data.weather[0].main
        let temp = (data.main.temp - 273.15).toFixed(1)
        let tempMin = (data.main.temp_min - 273.15).toFixed(1)
        let tempMax = (data.main.temp_max - 273.15).toFixed(1)
        let pressure = (data.main.pressure).toFixed(1)
        let humidity = (data.main.humidity).toFixed(1)

        $('#city').text(city);
        $('#country').text(country)
        $('#weatherDesc').text(weatherDesc)
        $('#temp').text(temp)
        $('#tempMin').text(tempMin)
        $('#tempMax').text(tempMax)
        $('#pressure').text(pressure)
        $('#humidity').text(humidity)
    })
  });