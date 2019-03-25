
// var city = document.querySelector('#cities').value;
// console.log(city)
// getWeather()
// function getWeather() { 

document.querySelector('#cities').addEventListener('#sbutton', function getWeather(){

    API_KEY = 'f5b0d6c20f9ba48157a290cdd094e528'
        var city = document.querySelector('#city').value;
        URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;

        axios({
            method: 'get',
            url: URL
        })
            .then(response => {
                console.log(getWeather)
            })
             .catch (error => {
            error.customError = "there is something wrong!"
            console.log(error.customError);
        }
    )
    console.log(city)
    });

 console.log(getWeather(Riyadh))

 



// axios({
//     method: 'GET',
//     url: `http://api.openweathermap.org/data/2.5/weather?q=${city},Saudi Arabia&APPID=f5b0d6c20f9ba48157a290cdd094e528`
// })
//     .then(response => {
//         var cities = response.data.results
//         console.log(cities)
//         var weather = $(".cityName")
//         cities.forEach((city, index) => {
         
//             if (index !=0) {
//                 sel.append(`<h3> ${city.name} </h3><img src="${city.weather}" />`)
//             }
//         });
//         console.log();
//     })
//     .catch(error => {
//         error.customError = "there is something wrong!"
//         console.log(error.customError);
//     })
