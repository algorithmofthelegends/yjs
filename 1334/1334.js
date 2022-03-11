const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
//console.log(input);
const size = input.length;
if (size % 2 == 0) {
  const 짝수 = input.substring(parseInt(size / 2));
  const 리버스짝수 = zak.split("").reverse().join("");
  console.log(짝수);
  console.log(리버스짝수 + 짝수);
} else {
  const hol = input.substring(0, parseInt(size / 2 + 1) - 1);
  const rhol = hol.split("").reverse().join("");
  const shol = input.slice(parseInt(size / 2));
  //console.log(rhol + shol);
  console.log(hol);
  console.log(rhol);
}
