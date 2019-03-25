function weather(){

axios({
    method:'GET',
    //API Key 36887df3a028cccbb27d6ab56168c237
    url:'http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=36887df3a028cccbb27d6ab56168c237'
    })

    $.get(url,function (response){
        response.forEach((data)  => {
        // i think it is true but it's work i don't know where the problem
        $(".container").append(`<h2>${data.name}</h2>`)
        // T(°C) = T(K) - 273.15
        $(".container").append(`<li>${data.main.temp - 273.15}</li>`)
        $(".container").append(`<li>${data.main.temp_min - 273.15}</li>`)
        $(".container").append(`<li>${data.main.temp_max - 273.15}</li>`)

        console.log(response);
    })
    })
    .catch((error)=> {
        console.log(error);
});


}
$("#buton").on('click',weather)

    
    
