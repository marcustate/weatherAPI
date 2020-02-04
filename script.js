$(document).ready(function() {


$('#submitWeather').click(function(){

});

});
 

var apiKey = '74c5a6c4845e450aed9034b5f6912291';
var baseUrl = 'https://samples.openweathermap.org/data/2.5/weather?q='
var location = ''
$.ajax({
    url: baseUrl + location + '&appId=' + apiKey
    method : 'GET'  
}).then(function (results) { 
    console.log(results);
});

















