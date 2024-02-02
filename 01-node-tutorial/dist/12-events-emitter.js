"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __importDefault(require("events"));
const customEmitter = new events_1.default();
customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with id: ${id}`);
});
customEmitter.on('response', () => {
    console.log(`Some other logic here`);
});
customEmitter.emit('response', 'john', 34);
//# sourceMappingURL=12-events-emitter.js.map