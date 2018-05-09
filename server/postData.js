const http = require('http');
const request = require('request');
const fs = require('fs');
let postData = '';

fs.readFile("hometrack-sample-request.json", 'utf8', function (err, data) {
    // postData = JSON.parse(data);
    postData = data;
    console.log('read file');
});

request.post({
        url: 'http://localhost:5000/',
        form: postData
    },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        } else {
            console.log(error)
        }
    });


/*
 
 
 http.createServer(function (req, res) {
 fs.readFile('hometrack-post-data.json', function(err, data) {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write(data);
 res.end();
 
 postData = data;
 // console.log( postData );
 });
 }).listen(8080);
 
 request.post(
 'http://localhost:5000/',
 { json: postData },
 function (error, response, body) {
 if (!error && response.statusCode == 200) {
 console.log(body)
 } else {
 console.log(error)
 }
 }
 );
 */
