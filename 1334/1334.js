const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
//console.log(input);
const size = input.length;
if (size % 2 == 0) {
  //짝수일 때
  const 짝수 = input.substring(parseInt(size / 2));
  const 리버스짝수 = zak.split("").reverse().join("");
  console.log(짝수);
  console.log(리버스짝수 + 짝수);
} else {
  //홀수일 때
  const left = input.substring(0, parseInt(size / 2 + 1) - 1);
  const right = input.substring(input.length, parseInt(size / 2 + 1));
  const 왼쪽이작을때 = left.split("").reverse().join("");
  console.log(left, right, 왼쪽이작을때);
  const 오른쪽이작을때 = right.split("").reverse().join("");
  if (left < right) {
    const 왼쪽 = input.substring(0, parseInt(size / 2 + 1));
    const 팰린드롬 = 왼쪽 + 왼쪽이작을때;
    console.log(왼쪽, 팰린드롬);
    if (parseInt(팰린드롬) < parseInt(input)) {
      const left = input.substring(0, parseInt(size / 2 + 1) - 1);
      const 중간수 = input.substring(input.length / 2, input.length / 2 + 1);
      const 다음팰린드롬 = left + (parseInt(중간수) + 1) + 왼쪽이작을때;
      console.log(left, 중간수, 다음팰린드롬);
    } else {
      console.log(팰린드롬);
    }
  } else if (left === right) {
    const 중간수 = input.substring(input.length / 2, input.length / 2 + 1);
    const 변경할수 = input.substring(input.length, parseInt(size / 2 + 1));
    console.log(변경할수);
    const 팰린드롬 = input.replace(변경할수, 왼쪽이작을때);
    const 다음팰린드롬 = 팰린드롬.replace(중간수, parseInt(중간수) + 1);
    console.log(다음팰린드롬);
  }
}
