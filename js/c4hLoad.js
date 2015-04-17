$(document).ready(function(){
  
  $("#send").click(function(){
    var data = {'name':$("#name").val(),'email':$("#email").val(),'message':$("#message").val()}
    console.log("the values are: " + $("#name").val() + "," + 
	                              $("#email").val() + "," +
								  $("#message").val());
	C4H.ajax.sendEmailMessage(data);							  
    return false;
  })  
});

