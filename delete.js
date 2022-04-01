global.fetch = require("node-fetch");
let url = "https://ev5uwiczj6.execute-api.eu-central-1.amazonaws.com/test/supply-chain";

const deleteMethod = {
    method: 'DELETE', // Method itself
    headers: {
        'Content-Type': 'application/json' // Indicates the content 
    },
    body: JSON.stringify(null)
}
// Make the HTTP Delete call using fetch api
fetch(url, deleteMethod)
    .then(response => response.json())
    .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
    .catch(err => console.log(err)) // Do something with the error