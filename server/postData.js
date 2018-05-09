const http = require('http');
const request = require('request');
const fs = require('fs');
const postData = require("./hometrack-sample-request.json");
const url = 'http://localhost:5000/';
const options = {
    method: 'post',
    body: postData,
    json: true,
    url: url
};
request(options, function (err, res, body) {
    if (err) {
        console.error('error posting json: ', err);
        throw err
    }
    const headers = res.headers;
    const statusCode = res.statusCode;
    console.log('headers: ', headers);
    console.log('statusCode: ', statusCode);
    console.log('body: ', body);
});
