require('dotenv').config();

let express = require('express');
let app = express();
console.log("Hello World")

app.get("/json", function(req, res) {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json(
        {
            "message": "HELLO JSON"
        }
        )
    } else {
        res.json(
        {
            "message": "Hello json"
        }
        )
    }
  })


































 module.exports = app;
