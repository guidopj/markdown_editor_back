const express = require('express');
const api = express.Router();

/* Controller */
const fileController = require("../controllers/fileController");

api.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/** BEGIN ROUTES **/

api.get("/files", fileController.getFiles);
api.post("/file", fileController.createFile);
api.put("/file/:id", fileController.updateFile);
api.delete("/file/:id", fileController.deleteFile);

/** END ROUTES **/

module.exports = api;
