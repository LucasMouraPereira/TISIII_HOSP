const express = require("express");
const router = express.Router();
const filterController = require('../controller/filterController');

router.get('/data',filterController.data);

router.get('/status',filterController.status);

module.exports = router;