"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser = /** @class */ (function () {
    function CreateUser() {
    }
    CreateUser.prototype.execute = function (_a) {
        var name = _a.name, age = _a.age;
        return { name: name, age: age };
    };
    return CreateUser;
}());
exports.default = new CreateUser();
