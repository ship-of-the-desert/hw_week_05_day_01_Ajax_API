$(document).ready(function(){
    function weather(){
       
            var URL = 'api.openweathermap.org/data/2.5/forecast/daily?q=Jeddah,{country code}&cnt={cnt}';
            $.getJson(URL, function(data){
            console.log(data);
            updateDOM();
        });
    }
weather();
function updateDOM(data) {
    var city =data.name;
    var temp =data.main.temp;
    $('#city').html(city);
    $('#temp').html(temp);

}
});