
$('#myform').on("submit", function(event){
    event.preventDefault()

    
    var userInput = $('.userInput').val()
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=e5641209c168c9ca6b5e2aed090e203d`
    $.get(url, function(response){

                let temp = Math.round(response.main.temp - 273.15)
                let tempMin = Math.round(response.main.temp_min - 273.15)
                let tempMax = Math.round(response.main.temp_max - 273.15)
                let weather = response.weather[0].description
                $('.city').append(
                    `<p>The Temperature today is ${temp}</p>
                    <p>The minimum today is ${tempMin}</p>
                    <p>The maximum today is ${tempMax}</p>
                    <p>The weather is ${weather}</p>
                    `
                )
                });

    })


