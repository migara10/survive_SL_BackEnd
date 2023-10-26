const express = require("express");
const bodyParser = require("body-parser"); //request data undefined fix
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());

const item = require("./routes/items");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/item", item);

app.listen(PORT, () => {
  console.log(`server is running on : ${PORT}`);
});
