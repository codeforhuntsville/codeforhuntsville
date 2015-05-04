C4H = {};
C4H.site = {};

C4H.site.displayMessage = function(message) {
  if (message) {
	$("#glass").css("visibility", "visible");
    $("#messageArea").html(message);
    $("#popupMessage").css("display", "block");
	setTimeout(function(){ C4H.site.displayMessage(); }, 15000);          
  } else {
	$("#popupMessage").css("display", "none");
	$("#glass").css("visibility", "hidden");
	C4H.site.clearForms();
  }
}

C4H.site.clearForms = function() {
  var fields = $("#s_name").add($("#s_email")).add($("#s_message")).add($("#pg_idea")).add($("#pg_email"));
  fields.each(function(){
    $(this).val('');
  })
}