const express =require('express');
const route=express.Router();
const auth=require('../middleware/auth');

const multer  = require('multer')
const upload = multer({ dest: '../uploads/' })
var session = require('express-session');

const path = require('path');

var fs= require('fs');
const controller = require("../controllers/task_controller");
const fscontroller=require("../controllers/index"); 

route.post('/api/task',controller.createtask);
route.get('/api/task',controller.gettask);
route.get('/api/singletask/:id',controller.singlegettask);
route.put('/api/edittask/:id',controller.edittask);
route.delete('/api/deletetask/:id',controller.deletetask);

route.get('/api/test',fscontroller.test);




module.exports = route