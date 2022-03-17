//const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const result = Array.from(input)
  .sort((a, b) => b - a)
  .join("");
console.log(result);
