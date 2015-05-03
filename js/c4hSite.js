C4H = {};
C4H.site = {};

C4H.site.displayMessage = function(message) {
  if (message) {
	$("#glass").css("visibility", "visible");
    $("#messageArea").html(message);
    $("#popupMessage").css("display", "block");
	          
  } else {
	$("#popupMessage").css("display", "none");
	$("#glass").css("visibility", "hidden");
  }
}