global.fetch = require("node-fetch");
let url = "https://ev5uwiczj6.execute-api.eu-central-1.amazonaws.com/test/supply-chain";


var data=
{
  quantity:"11",
  id:"cfc022a5-c239-45f5-bb35-f88023b669dr",
  price:"18",
  name:"YateenBbaluja"
};
const postMethod = {
  method: 'POST', // Method itself
  headers: {
    'Content-Type': 'application/json' // Indicates the content 
  },
  body: JSON.stringify(data) // We send data in JSON format
}

// make the HTTP post request using fetch api
fetch(url, postMethod)
  .then(response => response.json())
  .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
  .catch(err => console.log(err)) // Do something with the error