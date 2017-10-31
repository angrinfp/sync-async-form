$(document).ready(function (){

	$('input[type="submit"]').on("click", function(event) {
		var first_name = $('input[name="first_name"]').val();
		console.log(first_name);

		event.preventDefault();
	});
})