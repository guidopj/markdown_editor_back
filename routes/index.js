const express = require('express');
const api = express.Router();

/* Controller */
const fileController = require("../controllers/fileController");

/** BEGIN ROUTES **/

api.get("/files", fileController.getFiles);
api.post("/file", fileController.createFile);
api.put("/file/:id", fileController.updateFile);
api.delete("/file/:id", fileController.deleteFile);

/** END ROUTES **/

module.exports = api;
