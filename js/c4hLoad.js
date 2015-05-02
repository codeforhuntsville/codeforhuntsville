$(document).ready(function(){
  
  $("#send").click(function(){
    var data = {'name':$("#name").val(),'email':$("#email").val(),'message':$("#message").val()}
    console.log("the values are: " + $("#name").val() + "," + 
	                              $("#email").val() + "," +
								  $("#message").val());
	C4H.ajax.sendEmailMessage(data);							  
    return false;
  })
  $("#lslidetrig").click(function(){
      var closing = false;
      if ($(this).hasClass('closed')) {
        //$('#closed_txt').hide();		  
        $('.lpanel.left').animate({left:"0"},"slow");
        $(this).removeClass("closed");      
      } else {
        closing = true;
        $('.lpanel.left').animate({left:"-160px"},"slow");
        $(this).addClass("closed");
		
      }
      //$("#linksPanel").toggle('slow').toggleClass("active").css("display","block");
      displayLinkPanel($('#openm1'),$('#closem1'),closing,$('#closed_txt'));      
      return false;
  })  
  
});

displayLinkPanel = function(ido, idc, open, txt) {
  if (!open) {
	$('#closed_txt').hide();
    $(ido).css("display","none");
    $(idc).css("display","block");
  } else {
    $(idc).css("display","none");
    $(ido).css("display","block");
	$('#closed_txt').show();
  }
}

