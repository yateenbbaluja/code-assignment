global.fetch = require("node-fetch");
var XMLHttpRequest = require('xhr2');
const request = new XMLHttpRequest();
let url = "https://ev5uwiczj6.execute-api.eu-central-1.amazonaws.com/test/supply-chain";

request.open("GET", url);
request.send();
request.onload = () => {
  console.log(request);
  if (request.status === 200) {
    // by default the response comes in the string format, we need to parse the data into JSON
    console.log(JSON.parse(request.response));
  }
  else {
    console.log(`error ${request.status} ${request.statusText}`);
  }
};
