"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    if (req.url === '/') {
        res.end(`Welcome to our home page`);
        return;
    }
    if (req.url === '/about') {
        res.end(`Welcome to our About page`);
        return;
    }
    res.end(`
      <h1">Oops!</h1>
      <p>The requested page could not be found </p>
      <a href='/'> Return to home page </a>
    `);
});
server.listen(5000);
//# sourceMappingURL=http.js.map