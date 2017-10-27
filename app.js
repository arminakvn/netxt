/*
	Copyright 2015, Google, Inc. 
 Licensed under the Apache License, Version 2.0 (the "License"); 
 you may not use this file except in compliance with the License. 
 You may obtain a copy of the License at 
  
    http://www.apache.org/licenses/LICENSE-2.0 
  
 Unless required by applicable law or agreed to in writing, software 
 distributed under the License is distributed on an "AS IS" BASIS, 
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 See the License for the specific language governing permissions and 
 limitations under the License.
*/
"use strict";

var express = require('express');
var path = require('path');
var http = require('http');
var path = require('path');
var async = require('async');
var serveStatic = require('serve-static')


var app = express();

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.set('view engine', 'pug')

// app.use(serveStatic('./', {'index': ['index.html', 'index.htm']}))
app.use(serveStatic('./bower_components/semantic-ui/dist'))
app.use(serveStatic('./lib'))
// app.set('view engine', 'ejs');
// app.get('/', function(req, res) {
//   // res.status(200).send("Hello, world!");
//   res.render('index', function(err, html) {
// 	  res.send(html);
// 	});
//     // res.sendfile('./bower_components/shower-bright/index.html');
// });

app.get('/', function (req, res) {  
    res.render(
        'index',
        { title: 'Hey Hey Hey!', message: 'Yo Yo'})
})
// [END hello_world]

// [START server]
/* Start the server */
var server = app.listen(process.env.PORT || '8080', '0.0.0.0', function() {
  console.log('App listening at http://%s:%s', server.address().address, server.address().port);
  console.log("Press Ctrl+C to quit.");
  console.log("checking if adjustments work");
});
// [END server]
