"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var TasksController_1 = require("./controller/TasksController");
exports.routes = express_1.Router();
exports.routes.get('/', function (req, res) {
    return res.json({
        message: 'Tasks API - Server'
    });
});
exports.routes.get('/tasks', TasksController_1.getTasks);
exports.routes.get('/tasks/:id', TasksController_1.getTask);
exports.routes.post('/tasks', TasksController_1.saveTask);
exports.routes.put('/tasks/:id', TasksController_1.updateTask);
exports.routes.patch('/tasks/:id', TasksController_1.finishedTask);
exports.routes.delete('/tasks/:id', TasksController_1.removeTask);
//# sourceMappingURL=routes.js.map