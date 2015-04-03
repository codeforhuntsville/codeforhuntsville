var server = require('server');
var config = require('config.json');
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
//testData.getData();

//console.log ('Get a session: ' + session.getSession().id);
//console.log ('Get a session: ' + session.getSession().id);
//console.log ('Get a session: ' + session.getSession().id);
//var s = session.listSessions();
//var sid = s[1].id;
//console.log('the list: ' + s);
//for (var i=0;i<s.length;i++) {
//  console.log('In list: ' + s[i].id.com2);
//}
//session.deleteSession(null, 1);
//var s = session.listSessions();
//console.log ('Got a session: ' + s[1].id.com2 + ' : ' + session.getSession(sid).id.com2);

//----------------------------------------------------------------------------------


