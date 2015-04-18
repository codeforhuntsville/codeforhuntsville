var server = require('server');
//var postmark = require("postmark")(process.env.POSTMARK_API_KEY);
//var testData = require('odbcon');
//var session = require('session');
var router = require('router');
var requestHandlers = require('requestHandlers');
var testsend = require('sendNotification');
var config = require('config.json');

//var CHECKLISTMINUTES = 5;

var handle = {};
  handle['/'] = requestHandlers.start;
  handle['/c4h'] = requestHandlers.start;
  //handle['/login'] = requestHandlers.login;
  //handle['/logout'] = requestHandlers.logout;
  //handle['/register'] = requestHandlers.register;
  handle['/em'] = requestHandlers.send;

//var sessions = new Array();

server.start(router.route, handle);
console.log("host and port in config.json is: " + config.host + " : " + process.env.PORT);
console.log("Code4HSV is now up and running!");
//setInterval(function(){session.purgeSessions()},(CHECKLISTMINUTES*60*1000));
	

/*//--- Test stuff ---------------------------------------*/
var to = config.emailReciever
var subject = "Code4HSV on Heroku has fired up"
var message = "Dyno startup"
var response = null;
testsend.send(to, subject, message, response);
//----------------------------------------------------------------------------------


