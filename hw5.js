
var allcites = []
key ='424cf9e0c89ee99b4980c87e7ed08630'
document.getElementById('selCity').addEventListener('change',getCityInfo,false)
//document.getElementById('').addEventListener('click',,false)
//c28c60a4fee08688940d0cbf00571125

function getCityInfo(id) {
    var movieId;
    $('#box').empty();
     if(typeof(id) == 'object'){
         console.log(event.target.value)
         movieId=event.target.value
     }
     else{
         movieId=id
         console.log(id)
     }
 //get the elements by the id 
     var result = allfilms.filter(obj => {
         return obj.id == movieId
       })[0]
       console.log(result)
 
 $('#box').append(`<h3>${result.title}</h3>
 <p> ${result.description} </p>
 <h6>Director: ${result.director}</h6>
 <h6>Producer: ${result.producer}</h6>
 <h6>Release Date: ${result.release_date}</h6>
 <h6>Score out off 100! : ${result.rt_score}</h6>
 `)
}


listAll()

// list all cities 
function listAll() {
    axios({
        method: 'get',
        url:'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=424cf9e0c89ee99b4980c87e7ed08630'

        
        //url: 'http://api.openweathermap.org/data/2.5/weather?q=London,UK&APPID=424cf9e0c89ee99b4980c87e7ed08630'
    }).then(response => {

        console.log(response)

        // allfilms = response.data
        // //list of all films!
        // //when select show all info in dev 
        // console.log(response.data)
        // // var listOfBreeds = Object.keys(response.data.message)
        // allfilms.forEach(element => {
        //     opt = `<option value = "${element.id}">${element.title}</option>`;
        //     $('#selBreed').append(opt);
        // });
    }).catch(error => {
        console.log(error);
    });
}
