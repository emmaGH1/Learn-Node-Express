"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const first = (0, fs_1.readFileSync)('../content/first.txt', 'utf8');
const second = (0, fs_1.readFileSync)('../content/second.txt', 'utf8');
(0, fs_1.writeFileSync)('../content/result-sync.txt', `Here is the result : ${first}, ${second}`, { flag: 'a' });
//# sourceMappingURL=10-fs-sync.js.map