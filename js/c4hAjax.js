C4H = {};
C4H.ajax = {};

C4H.ajax.initReqObj = function() {
  if (window.XMLHttpRequest) {
    HPROG.ajax.httpReq = new XMLHttpRequest();
  } else {
    HPROG.displayMessage("This site only supports Firefox and Chrome browsers", true);
  }
};

C4H.ajax.prepRequest = function(action, data) {
  if (action == 'em')
    console.log("em name: " + data('name') + " fr: " + data('email') + " mess: " + data('message'));
    C4H.ajax.sendEmailMessage(data) ;  
};

C4H.ajax.insertMemeber = function(data) {
  var dataS = JSON.stringify(data);
  console.log( "The data to send: " + dataS);
   
  $.ajax({
    type: 'POST',
    url: '/register',
    data: dataS,
    xhrField: { withCredentials: true },
    success: function(validationResp) {
      console.log("data received: " + validationResp.message);
	  if (validationResp.nid) {
	    console.log('OK, now the new member is added, and an email sent... ');
		
	  }
      if (validationResp.message) {       
        C4H.site.displayMessage(validationResp.message, true);
      }     
    }
  });
};

C4H.ajax.updateMemeber = function(data) {
  var dataS = JSON.stringify(data);
  var changed = false;
  console.log( "The data sent: " + dataS);
  $.ajax({
    type: 'POST',
    url: '/updateDB',
    data: dataS,
    xhrField: { withCredentials: true },
    success: function(validationResp) {
      //console.log("data received: " + validationResp.length + " at column: " + column);
      if (validationResp.message) {       
        C4H.site.displayMessage(validationResp.message, true);
      }
      changed = true;	  
    }
  });
  return true;
};

C4H.ajax.sendEmailMessage = function(data) {
  var dataS = JSON.stringify({emess:data});
  var ret;
  console.log( "The data sent: " + dataS);
  $.ajax({
    type: 'POST',
    url: '/em',
    data: dataS,
    xhrField: { withCredentials: true },
    success: function(validationResp) {
      console.log("data received: " + validationResp['message']);  
	  //C4H.site.clearEMessage();
	  C4H.site.resetInputDialog();
	  if (validationResp.message) {
	    console.log("data received 2: " + validationResp['message']);
	    //C4H.site.displayMessage(validationResp.message, true);
	  }	  
    },
	error: function(validationResp) {
      console.log("error received: " + validationResp['message']);
	  C4H.site.displayMessage("Message Not Sent", false);
      C4H.site.clearEMessage();	  
      if (validationResp.message) {       
        C4H.ajax.parseData(validationResp);
	  }     
    }
  });
};

C4H.ajax.parseData = function(jObj) {
  console.log("will parse data" + jObj); 
  Object.keys(jObj).forEach(function (key) {
    console.log("Key: " + key + " Value: " + jObj[key]);
  });
  //if (Object.keys(jObj)[0] == 'skills') {
  //  RCSData.skills = jObj['skills'];
  //} else if (jObj['members']) {
  //  RCSData.cMembers = jObj['members'];
  //}	
};
    
HPROG.ajax.prepMessageData = function() {
};

