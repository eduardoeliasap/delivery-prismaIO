"use strict";
exports.__esModule = true;
exports.routes = void 0;
var express_1 = require("express");
var create_client_controller_1 = require("./modules/client/useCases/create/create-client-controller");
var routes = (0, express_1.Router)();
exports.routes = routes;
var createClientController = new create_client_controller_1.CreateClientController();
routes.post("/client/", createClientController.handle);
//# sourceMappingURL=routes.js.map