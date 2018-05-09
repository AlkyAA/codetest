const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const fs = require("fs");
const filter = require('lodash.filter');
const url = require('url');
const request = require('request');

const app = express();

app
    .use(express.static(path.join(__dirname, 'public')))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(function (err, req, res, next) {
        res.status(400).send({"error": "Could not decode request: JSON parsing failed"})
    })
    .use('/public', express.static(__dirname + '/server'))
    .use(express.static(__dirname + '/server'))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .post('/', function(req, res){
        var body = req.body;
        const filePath = __dirname + '/server/hometrackData.json';
        fs.writeFile(filePath, JSON.stringify(body), function(err) {
            if (err) { throw err }
            res.send('Hello POST body:');
        })
        
    })
    .get('/home', (req, res) => res.render('pages/index-alky'))
    .get('/showSampleData', function (req, res) {
        fs.readFile(__dirname + "/server/" + "hometrack-sample-request.json", 'utf8', function (err, data) {
            res.send(data);
        });
    })
    .get('/filterSampleData', function (req, res) {
        fs.readFile(__dirname + "/server/" + "hometrack-sample-request.json", 'utf8', function (err, data) {
            const jsonData = JSON.parse(data);
            res.send(filterData(jsonData.payload));
        });
    })
    .get('/showPostData', function (req, res) {
        fs.readFile(__dirname + "/server/" + "hometrackData.json", 'utf8', function (err, data) {
            console.log(data);
            res.send(data);
        });
    })
    .get('/filterData', function (req, res) {
        fs.readFile(__dirname + "/server/" + "hometrackData.json", 'utf8', function (err, data) {
            const jsonData = JSON.parse(data);
            console.log(jsonData);
            res.send(filterData(jsonData.payload));
        });
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const filterData = data => {
    const filteredArray = filter(data, {workflow: 'completed', type: 'htv'});
    const returnedArray = filteredArray.map((item, indx) => {
        let addressStr = '';
        const address = item.address;
        for (var key in address) {
            if (address.hasOwnProperty(key)) {
                addressStr += address[key] + ' ';
            }
        }
        return {
            concataddress: addressStr.trim(),
            type: item.type,
            workflow: item.workflow
        }
    });
    
    return {response: returnedArray};
};


