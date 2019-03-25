
function getWeather(){
    axios({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=f15a0ac8bf05454208593ec64393eafe`,
        method: 'get',
      })
      .then((response) => {
        
        console.log(response.data.name) ;
        console.log(response.data.main.temp) ;
        $(".weather").append(${response.data.name}) ; 
        $(".weather").append(${response.data.main.temp}) ; 

      }) 
    
      .catch((error)=>{
          console.log(error)
    
      }) }
      
    $('.weather').on('click',getWeather)
      
