const express = require("express");
const router = express.Router();
const tasksController = require('./controllers/taskContoller')

router.get('/login', tasksController.getAll);
router.post('/login', tasksController.login);

module.exports = router;