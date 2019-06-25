'use strict'

const express = require('express');
const api = express.Router();

/* Controller */
const fileController = require("../controllers/fileController");

/** BEGIN ROUTES **/

api.get("/domains/parameters/:id?", domainsParametersController.getParameters);
api.post("/domains/:id/parameters", domainsParametersController.createParameter);
api.put("/domains/parameters/:id", domainsParametersController.updateParameter);
api.delete("/domains/parameters/:id", domainsParametersController.deleteParameter);


/** END ROUTES **/

module.exports = api
