"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
// info about current user
const user = os_1.default.userInfo();
console.log(user);
// method returns the system uptime in seconds 
console.log(`The System Uptime is ${os_1.default.uptime()} seconds`);
// system info
const { type, release, totalmem, freemem } = os_1.default;
const currentOS = {
    name: type(),
    release: release(),
    totalmem: totalmem(),
    freemem: freemem()
};
console.log(currentOS);
//# sourceMappingURL=8-os-module.js.map