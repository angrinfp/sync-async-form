$(document).ready(function (){
   $('input[type="submit"]').on("click", function(event) {
       event.preventDefault();

      /* $.ajax('find.html' , {
           method: 'post',
           data: {
               'first_name': first_name
           }
       });*/

    var first_name = $('#first_name').val(); // [first_name]

    var last_name = $('#last_name').val(); // [last_name]

    var gender = $('input[name="gender"]:checked').val(); // []

    var interest = $('input[name="interest"]:checked'); // [1, 2]
    var interests = new Array();

    // input[name="interest"]:checked -> un selector
    // $('input[name="interest"]:checked'); -> array de coincidencias
    // .val(); -> saca el valor de la primera coincidencia, osea el primero chequeado

    for (var i = 0; i < interest.length; i++) {
        var temp_interest = interest[i];
        interests.push(temp_interest.value);
    }

       var payload = {
        'first_name': first_name,
        'last_name': last_name,
        'gender': gender,
        'interests': interests
       }

       $.post('find.html', payload);
       $.get('find.html' , payload);

   });
});