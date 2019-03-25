// key ef3f1825d5c671c02bbe2d21b6373675
//https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY 
//console.log("JS linked")

var container=document.querySelector(".container");
container.innerHTML="";

document.querySelector(".formInfo").addEventListener('submit',displayWeather)


function displayWeather(e){
    e.preventDefault();//to prevent refresh page after submit
    var uerInput=document.getElementsByName('city')[0].value;//take user input
    
    //console.log(uerInput);
    // debugger
    axios({
        method:"GET",
        url:`https://api.openweathermap.org/data/2.5/weather?q=${uerInput},uk&appid=ef3f1825d5c671c02bbe2d21b6373675`
         //display weather only in UK cities
    })
    .then(response=>{
        //console.log(response)
        //convert temp to c° and display 0 digit after decimal point 
        //T(°C) = T(K) - 273.15
        var tem=((response.data.main.temp)-273.15).toFixed();
        //console.log(`${tem}°`)
        //console.log(response.data.name)//display the city name
        //console.log(response.data.weather[0].description)//display current conditions

        //A view that will display the city name, temperature and current conditions
        container.innerHTML+=`${response.data.name} <br/>${tem}°<br/>${response.data.weather[0].description}<br/><hr>`
    })
    axios({
        method:'GET',
        url:`https://api.openweathermap.org/data/2.5/forecast?q=${uerInput},uk&appid=ef3f1825d5c671c02bbe2d21b6373675`
    })
    .then(response=>{

        //display tem and description of next 5 days 
        var tem0=((response.data.list[0].main.temp)-273.15).toFixed();
        container.innerHTML+=`${tem0}°<br/>${response.data.list[0].weather[0].description}<br/><hr>`
        
        var tem1=((response.data.list[1].main.temp)-273.15).toFixed();
        container.innerHTML+=`${tem1}°<br/>${response.data.list[1].weather[0].description}<br/><hr>`

        var tem2=((response.data.list[2].main.temp)-273.15).toFixed();
        container.innerHTML+=`${tem2}°<br/>${response.data.list[2].weather[0].description}<br/><hr>`

        var tem3=((response.data.list[3].main.temp)-273.15).toFixed();
        container.innerHTML+=`${tem3}°<br/>${response.data.list[3].weather[0].description}<br/><hr>`

        var tem4=((response.data.list[4].main.temp)-273.15).toFixed();
        container.innerHTML+=`${tem4}°<br/>${response.data.list[4].weather[0].description}<br/><hr>`

        //.........................................

        //container.innerHTML+=`${response.data.city.name} <br/>${tem0}°<br/>${response.data.list[0].weather[0].description}<br/><hr>`
        // var tem1=((response.data.list[1].main.temp)-273.15).toFixed();
        // console.log(response.data.list[1].main.temp)
        // console.log(tem1)
        // container.innerHTML+=`${response.data.weather[0].main} <br/>${tem1}°<br/>${response.data.weather[0].description}`

        // var tem2=((response.data.list[2].main.temp)-273.15).toFixed();
        // console.log(tem2)
        // container.innerHTML+=`${response.data.weather[0].main} <br/>${tem2}°<br/>${response.data.weather[0].description}`

        // console.log(response.data.list[2].main.temp)
        // var tem3=((response.data.list[3].main.temp)-273.15).toFixed();
        // console.log(tem3)
        // container.innerHTML+=`${response.data.weather[0].main} <br/>${tem3}°<br/>${response.data.weather[0].description}`

        // console.log(response.data.list[3].main.temp)
        // var tem4=((response.data.list[4].main.temp)-273.15).toFixed();
        // console.log(tem4)
        // container.innerHTML+=`${response.data.weather[0].main} <br/>${tem4}°<br/>${response.data.weather[0].description}`
        // console.log(response.data.list[4].main.temp)
    })
    


}

