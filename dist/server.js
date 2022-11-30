"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var app = (0, express_1["default"])();
app.use(routes_1.routes);
app.get("/", function (request, response) {
    return response.json({
        message: "Hello world"
    });
});
app.listen(3000, function () { return console.log("Server is runnig!!"); });
//# sourceMappingURL=server.js.map