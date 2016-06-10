var express = require("express");
let bodyParser = require("body-parser");
let cookieParser = require("cookie-parser");
[[[REPLACE:HEADER]]]

const app = express();

[[[REPLACE:MID]]]

app.use(bodyParser.json()); // support json encoded bodies
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

[[[REPLACE:BOTTOM]]]

const server = app.listen(process.env.PORT || 3000, () => {
    const {address, port} = server.address();
    console.log(`New Project is now listening at http://${address}:${port}`);
});