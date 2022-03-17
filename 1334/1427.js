const input = require("fs").readFileSync("/dev/stdin").toString().trim();
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().trim();

const inputArr = Array.from(input);
const sortInput = inputArr.sort((a, b) => b - a);
const result = sortInput.join("");
console.log(result);
