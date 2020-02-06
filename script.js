var apiKey = '74c5a6c4845e450aed9034b5f6912291';
var baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
var locationQuery = '';

$(document).ready(function(){
    $('#submitWeather').click(function(){

        $.ajax({
            url: baseUrl + locationQuery + '&appId' + apiKey,
            method: 'GET'
        }).then(function(results){
            console.log(results);
        })
    })

})

function show(data) {
    return "<h2><strong>Weather</strong>: " + data.weather[0].main + "</h2>"
}
