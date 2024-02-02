// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (Only share minimum)
import { peter, john } from "./4-names";
import { sayHi } from "./5-utils";
const data = require('./7-mind-grenade')

console.log(peter, john)
sayHi('Susan')
sayHi(john)
sayHi(peter)