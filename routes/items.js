const express = require("express");
const router = express.Router();

const itemController = require("../controllers/itemController");

// Use addNewItem as a callback, don't execute it here
router.post("/", itemController.postNewItem);
router.get("/", itemController.getNewItem);

module.exports = router;
