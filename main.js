

axios.get(`http://api.openweathermap.org/data/2.5/weather?q=riyadh&appid=b8c4b03a0f22a431b08a11a3754d0bcd`,{

})

.then(function(response){
    // console.log(response.data.name);
    theInput = document.querySelector(".input");
    console.log(response.data.name);
    var theso = response.data.name; 
    console.log(theso)
    for (item in response){
      console.log(item);
    }


    
})