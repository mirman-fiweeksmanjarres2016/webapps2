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

  var formData = {
    firstName: $("#firstname").val(),
    lastName: $("#lastname").val(),
    email: $("#email").val(),
    message: $("#message").val()
  };
  console.log(formData);
  // Secondary Objective: Use the AJAX methods built into jQuery to send
  // The form data to http://x.mirman.org:9999. Write a callback to handle
  // the response.
  var destinationUrl = "http://x.mirman.org:1031/ground4loor";
  $.post(destinationUrl, formData, function(response){
    console.log(response);
  })
  })
  });
