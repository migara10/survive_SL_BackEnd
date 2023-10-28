const express = require("express");
const mongoDb = require('./db'); // create connection in database
const bodyParser = require("body-parser"); //request data undefined fix
const cors = require('cors');

const PORT = process.env.PORT || 3000; // default port or env port
const app = express();
app.use(cors());

const item = require("./routes/items");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/item", item);

mongoDb();

app.listen(PORT, () => {
  console.log(`server is running on : ${PORT}`);
});
