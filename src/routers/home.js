const express = require("express");
const router = express.Router();
const AccountController = require("../app/Controllers/AccountController");
router.get("/index", AccountController.get);
router.post("/data", AccountController.data);

module.exports = router;
