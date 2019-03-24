function weather(e) {
e.preventDefault()
    var input= document.querySelector('#city').value;
    var cont = document.querySelector('.container')
    var id = 0;
  
    
axios({
    method: 'get',
    url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=f3fd8040e66d819dc5601307064cfb95`
})

.then(response => {
    cont.innerHTML+=  `<h3>${response.data.name}</h3>`;
    cont.innerHTML+=  `<p><i>temp: </i>${response.data.main.temp}</p>`;
    cont.innerHTML+=  `<p><i>current conditions: </i> ${response.data.weather[0].description}</p>`;
    id = response.data.id
    axios({
        method: 'get',
        url: `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=f3fd8040e66d819dc5601307064cfb95`
    })
    .then(response =>{
        cont.innerHTML+=  `<h3 class="colorh3">City weather for next five days</h5>`;
    for (i=0;i<=40;i+=7){
        cont.innerHTML+=  `<h5>date :${response.data.list[i].dt_txt}</h5>`;
        cont.innerHTML+=  `<p><i>temp: </i>${response.data.list[i].main.temp}</p>`;
        cont.innerHTML+=  `<p><i>current conditions: </i>${response.data.list[i].weather[0].description}</p>`;
      
    }
    console.log(response)
    }
        )
})



}
document.querySelector("#btn").addEventListener('click',weather)


