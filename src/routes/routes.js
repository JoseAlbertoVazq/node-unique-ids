/* eslint-disable global-require */

const express = require('express');
const router = express.Router();
const {
    validateIDsRequest
} = require("../validators/validator");
const {
    giveMeSomeIds
} = require("../controllers/ids.controller");

router.post('/generateIds', validateIDsRequest, giveMeSomeIds);

module.exports = router;