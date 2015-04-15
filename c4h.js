var server = require('server');
var config = require('config.json');
var postmark = require('postmark');
//var testData = require('odbcon');
//var session = require('session');
var router = require('router');
var requestHandlers = require('requestHandlers');

//var CHECKLISTMINUTES = 5;

var handle = {};
  handle['/'] = requestHandlers.start;
  handle['/c4h'] = requestHandlers.start;
  //handle['/login'] = requestHandlers.login;
  //handle['/logout'] = requestHandlers.logout;
  //handle['/register'] = requestHandlers.register;
  //handle['/dbCall'] = requestHandlers.dbcall;

//var sessions = new Array();

server.start(router.route, handle);
console.log("host and port in config.json is: " + config.host + " : " + process.env.PORT);
console.log("Code4HSV is now up and running!");
//setInterval(function(){session.purgeSessions()},(CHECKLISTMINUTES*60*1000));
	

/*//--- Test stuff ---------------------------------------*/
var client = new postmark.Client(process.env.POSTMARK_API_KEY);

client.sendEmail({
    "From": "contacts@code4huntsville.org",
    "To": "larry.mason@alltowntech.com",
    "Subject": "Test from Postmark via heroku", 
    "TextBody": "Hello from Postmark!"
});

//----------------------------------------------------------------------------------


