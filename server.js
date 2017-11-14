const express = require("express");
const app     = express();
const path    = require("path");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use("/", express.static("public"));

app.post("/find", (request, response) => {
    console.log(request.body.first_name);
    console.log(request.body.last_name);
    response.json({"method": "post", "success": true});
    
});

app.get("/find", (request, response) => {
    console.log(request.query.first_name);
    console.log(request.query.last_name);
    response.json({"method": "get", "success": true});
    
});

app.listen(8080, function () {
  console.log('Listening on port 8080!')
})