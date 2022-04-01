global.fetch = require("node-fetch");
var FormData = require('form-data');
var fs = require('fs');
var form = new FormData();
let url = "https://ev5uwiczj6.execute-api.eu-central-1.amazonaws.com/test/supply-chain";


var data = 
{
  quantity: "1",
  id: "mcc022a5-c239-45f5-bb35-f88023b669dr",
  price: "1",
  name: "Philips Testing"
};
fetch(url, {
  method: 'PUT',
  body: form
})
  .then(response => response.json())
  .then(result => {
    console.log('Success:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });