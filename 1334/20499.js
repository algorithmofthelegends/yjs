const input = require("fs").readFileSync("/dev/stdin").toString().trim();
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().trim();

const kda = input.split("/");

if (parseInt(kda[0]) + parseInt(kda[2]) < parseInt(kda[1]) || kda[1] == 0) {
  console.log("hasu");
} else {
  console.log("gosu");
}
