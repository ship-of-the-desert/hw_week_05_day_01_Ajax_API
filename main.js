// api.openweathermap.org/data/2.5/weather?q=London
// api.openweathermap.org/data/2.5/weather?q=
// https://samples.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b6be79157dd4037dd4bf0c9aa483166a
var dateItHappens = new Date()
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date();
var dayName = days[d.getDay()];
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const da = new Date();



axios({
    method: 'get',
    url: `http://api.openweathermap.org/data/2.5/weather?q=Dubai&APPID=b6be79157dd4037dd4bf0c9aa483166a`


})
    .then(res => {
        console.log(res)
       $("#city").text(res.data.name)
    //    day
    $("#day").text(`${monthNames[d.getMonth()]} ${dateItHappens.getDate()} ${dateItHappens.getFullYear()} `)
    $("#time").text(` time =>${dateItHappens.getUTCHours()}:${dateItHappens.getMinutes()}`)
   $("#louds").text( "clouds " +res.data.clouds.all+"%")
   $("#degree").text(`temperature ${parseInt(res.data.main.temp - 273)}C`)
   $('#R').text(res.data.weather["0"].description)
   $("#max").text(`max ${parseInt(res.data.main.temp_max - 273)}C`)
   $("#min").text(`min ${parseInt(res.data.main.temp_min- 273)}C`)
   $("#wind").text(`wind speed ${res.data.wind.speed}`)

console.log(parseInt	(res.data.main.temp - 273))
console.log(res.data.wind.speed)
// description
console.log(res.data.weather["0"].description)
console.log() 
console.log()
console.log()

    })




$(".btn").on('click', function(){

    // alert($("#Se1").val());
    axios({
        method: 'get',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${$("#Se1").val()}&APPID=b6be79157dd4037dd4bf0c9aa483166a`
    
    
    })
        .then(res => {
            console.log(res)
           $("#city").text(res.data.name)
        //    day
        $("#day").text(`${monthNames[d.getMonth()]} ${dateItHappens.getDate()} ${dateItHappens.getFullYear()} `)
        $("#time").text(` time =>${dateItHappens.getUTCHours()}:${dateItHappens.getMinutes()}`)
       $("#louds").text( "clouds " +res.data.clouds.all+"%")
       $("#degree").text(`temperature ${parseInt(res.data.main.temp - 273)}c`)
       $('#R').text(res.data.weather["0"].description)
       $("#max").text(`max ${parseInt(res.data.main.temp_max - 273)}c`)
       $("#min").text(`min ${parseInt(res.data.main.temp_min- 273)}`)
       $("#wind").text(`wind speed ${res.data.wind.speed}`)

        })
        .catch(res => {
            alert("Error entering the city or it is out of our range");
        })


})