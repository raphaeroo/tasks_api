"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var routes_1 = require("./routes");
var app = express();
typeorm_1.createConnection();
app.use(cors());
app.use(bodyParser.json());
app.use(routes_1.routes);
app.listen(process.env.PORT || 3333);
//# sourceMappingURL=index.js.map