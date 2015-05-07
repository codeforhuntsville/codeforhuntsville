
$(document).ready(function(){
 resetPage();
 $("#menuicon").click(function() {
	if ($("#menu").css("visibility") === 'hidden') {
	  $("#menu").add(".mlink").css("visibility","visible");
    } else {
	  $("#menu").add(".mlink").css("visibility","hidden");	
	}	  
  })  
  $("#send").click(function(){
    var data = {'name':$("#s_name").val(),'email':$("#s_email").val(),'message':$("#s_message").val()}
    console.log("the values are: " + $("#s_name").val() + "," + 
	                              $("#s_email").val() + "," +
								  $("#s_message").val());
	if (validateEMail($("#s_email").val())) {							  
	  C4H.ajax.sendEmailMessage(data);
    } else {
	  console.log("invalid email address");
	  C4H.site.displayMessage("Come on now, at least enter a valid email address!");
	}	  
    return false;
  })
  $("#gfButtonSubmit").click(function() {
	if ($('#pg_idea').val()) {
      C4H.ajax.postToGoogle($('#pg_idea').val(), $('#pg_email').val());	
    } else {
	  C4H.site.displayMessage("Well to have to have some idea!");
	}	  
  })
  $("#popupMessage").click(function(){
    C4H.site.displayMessage(null);   	
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
  $("#closed_txt").click(function() {
	  $("#lslidetrig").click();
  })
  $('.mlink').click(function() {
      window.open($(this).attr('data'));
	  console.log("Menuicon is displayed: " + $("#menuicon").css("display"));
      if ($(window).width() > 980) {
	    $(".mlink").css("visibility","visible");  
	  }	else {
		$("#menu").add(".mlink").css("visibility","hidden");
	  }  
  })
  $(window).resize(function() {
      resetPage();
  })
});

function resetPage() {
    if ($(window).width() > 980) {
	  $(".mlink").css("visibility","visible");
      $(".header").css("z-index", "25");	  
	} else {
	  $("#menu").add(".mlink").css("visibility","hidden");
	   $(".header").css("z-index", "0");
	} 
}
      
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

validateEMail = function(expr) {
  var pattern = /^[-!#$%&\'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&\'*+\/0-9=?A-Z^_a-z{|}~])*@[a-zA-Z](-?[a-zA-Z0-9])*(\.[a-zA-Z](-?[a-zA-Z0-9])*)+$/
  return pattern.test(expr);
}

