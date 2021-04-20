"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
var CreateUser_1 = __importDefault(require("./CreateUser"));
function createUser(request, response) {
    var user = CreateUser_1.default.execute({ age: 37, name: "Marcelo" });
    response.json(user);
}
exports.createUser = createUser;
