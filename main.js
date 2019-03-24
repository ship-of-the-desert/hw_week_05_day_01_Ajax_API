function cityWeather(){
    axios({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=riyadh+&units=metric&APPID=3963da4e840561411b73cfff74c27a1a'
                // city id 108410
      }) 

      .then((response) => {
        console.log(response);

        $('.name1').text(`City: ${response.data.name}`)
        $('.name2').text(`Temperature: ${response.data.main.temp}°C`)
        $('.name3').text(`Condition: ${response.data.weather[0].description}`)
         })
      .catch((error)=>{
          error.customError = "No NO!"
          console.log(error.customError);
      })
    }
 cityWeather();