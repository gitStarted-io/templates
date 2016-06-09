var express = require("express");
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
[[[TOP_CONTENT_REPLACE]]]

const app = express();

[[[MID_CONTENT_REPLACE]]]

app.use(bodyParser.json()); // support json encoded bodies
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

[[[BOTTOM_CONTENT_REPLACE]]]

const server = app.listen(process.env.PORT || 3000, () => {
    const {address, port} = server.address();
    console.log(`gitStarted API listening at http://${address}:${port}`);
});