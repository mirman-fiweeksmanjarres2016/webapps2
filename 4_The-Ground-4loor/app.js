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
