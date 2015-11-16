<<<<<<< HEAD
$(document).on( "submit", function( event ) {
  event.preventDefault();
  
  console.log( $("#firstname").serialize() );
  console.log( $("#lastname").serialize() );
  console.log( $("#email").serialize() );
  console.log( $("#message").serialize() );
});

var destinationUrl = "http://x.mirman.org:1031/ground4loor";
$.post(destinationUrl, formData, function(response){
  console.log(response);
=======
$(document).ready(function(){
  $("#contact-form").submit(function(event){
    event.preventDefault();
    //Use jQuery to collect the values from the fields and create a
    //JSON object containing them. Then, log the result to the console

    // Secondary Objective: Use the AJAX methods built into jQuery to send
    // The form data to http://x.mirman.org:9999. Write a callback to handle
    // the response.
  })
});
>>>>>>> 67e65d0c79640b847b1ea6ba50cd8b4fab084578
