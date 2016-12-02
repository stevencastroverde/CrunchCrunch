$(document).ready(function() {

var apiUrl = 'http://localhost:3000/';

    $('#button').click(function() {
      var chosen =  $('#selected').val()
        console.log(chosen)
      })


$.get(apiUrl + chosen , function(response){
  console.log(response);


})

});
