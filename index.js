// axios({
//     method: 'GET',
//     url: 'https://rickandmortyapi.com/api/character/1,2,3,4,5'
//   })

//   .then(response => {
//     for (var i=0; i<5; i++){
//         console.log(response.data[i].name);
//         container.innerHTML+=`<p>${response.data[i].name}</p>`
//         container.innerHTML+=`<img src="${response.data[i].image}"/>`
//       }
    
    
// // let char1=document.querySelector('#char1')
// // char1.setAttribute(response.data[0].name)
//   })






var container=document.querySelector('.container')

var e = document.getElementById("city");
var value = e.options[e.selectedIndex].value;
var text = e.options[e.selectedIndex].text;
console.log(value);
  

    axios({
        method: 'GET',
        url: `https://api.openweathermap.org/data/2.5/weather?q=${value},uk&appid=94a3836f0e126729e82a432ac47b8a08`
      })
.then(response=>{
    container.innerHTML+=`<p>${response.data.name}</p>`
})


