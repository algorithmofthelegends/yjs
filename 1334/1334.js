const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
//console.log(input);
const size = input.length;
if (size % 2 == 0) {
  //짝수일 때
  const left = input.substring(0, parseInt(size / 2 + 1) - 1);
  const right = input.substring(input.length, parseInt(size / 2));
  const 왼쪽이작을때 = left.split("").reverse().join("");
  const 오른쪽이작을때 = right.split("").reverse().join("");
  console.log(left, right, 왼쪽이작을때, 오른쪽이작을때);
  let 구 = "";
  for (i = 0; i < input.length; i++) {
    구 += "9";
  }
  if (input == 구) {
    console.log(String(parseInt(구) + 2));
  }
} else {
  //홀수일 때
  const left = input.substring(0, parseInt(size / 2 + 1) - 1);
  const right = input.substring(input.length, parseInt(size / 2 + 1));
  const 왼쪽이작을때 = left.split("").reverse().join("");
  const 오른쪽이작을때 = right.split("").reverse().join("");
  console.log(left, right, 왼쪽이작을때, 오른쪽이작을때);
  let 구 = "";
  for (i = 0; i < input.length; i++) {
    구 += "9";
  }
  if (input == 구) {
    console.log(String(parseInt(구) + 2));
  } else {
    if (left < right) {
      // 왼쪽이 작을때
      const 왼쪽 = input.substring(0, parseInt(size / 2 + 1));
      const 팰린드롬 = 왼쪽 + 왼쪽이작을때;
      if (parseInt(팰린드롬) <= parseInt(input)) {
        // 완성된 팰린드롬이 제시된 수 보다 큰지 확인
        const left = input.substring(0, parseInt(size / 2 + 1) - 1);
        const 중간수 = input.substring(input.length / 2, input.length / 2 + 1);
        if (중간수 == 9) {
          const 구팰린드롬 =
            parseInt(left) +
            1 +
            "0" +
            String(parseInt(left) + 1)
              .split("")
              .reverse()
              .join("");
          console.log(구팰린드롬);
        } else {
          const 다음팰린드롬 = left + (parseInt(중간수) + 1) + 왼쪽이작을때;
          console.log(다음팰린드롬);
        }
      }
    } else if (left === right) {
      const 중간수 = input.substring(input.length / 2, input.length / 2 + 1);
      if (중간수 == 9) {
        const 구팰린드롬 =
          parseInt(left) +
          1 +
          "0" +
          String(parseInt(left) + 1)
            .split("")
            .reverse()
            .join("");
        console.log(구팰린드롬);
      } else {
        const 다음팰린드롬 = left + (parseInt(중간수) + 1) + 왼쪽이작을때;
        console.log(다음팰린드롬);
      }
    } else if (left > right) {
      // 오른쪽이 작을때
      const 왼쪽 = input.substring(0, parseInt(size / 2 + 1));
      const 팰린드롬 = 왼쪽 + 왼쪽이작을때;
      console.log(팰린드롬);
    }
  }
}
