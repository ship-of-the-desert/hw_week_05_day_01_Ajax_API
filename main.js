$(document).ready(function(){



    $('#submitweather').click(function(){
        var city=$("city").val ();
        if(city != ''){
            $.ajax({
                url: "api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric"+ "dbbe9dc3e2d633e04681344f9d5b119b",
                type:"GET"
            
            })
        }
    
    });
});





