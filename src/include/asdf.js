const _ = require("lodash");

let obj = {
  "1": "asdf",
  "4": "asdf",
  "5": "asdf",
  "3": "asdf"
};

let newObj = { ...obj, "3": "asdwqi" };

console.log(obj);
console.log(newObj);
