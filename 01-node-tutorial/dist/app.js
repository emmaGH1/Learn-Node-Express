"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const getText = (path) => {
    return new Promise((resolve, reject) => {
        (0, fs_1.readFile)(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
};
// getText(path.join(__dirname, '../content/first.txt'))
// .then(result => console.log(result))
// .catch((err) => console.log(err))
const start = async () => {
    try {
        const first = await getText(path_1.default.join(__dirname, '../content/first.txt'));
        const second = await getText(path_1.default.join(__dirname, '../content/second.txt'));
        console.log(first, second);
    }
    catch (error) {
        console.log(error);
    }
};
start();
//# sourceMappingURL=app.js.map