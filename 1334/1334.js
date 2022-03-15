const fs = require("fs");
//const filePath = "/dev/stdin";
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
const size = input.length;
if (size % 2 == 0) {
  //짝수일 때
  const left = input.substring(0, parseInt(size / 2 + 1) - 1);
  const right = input.substring(input.length, parseInt(size / 2));
  const rleft = left.split("").reverse().join("");
  let nine = "";
  for (i = 0; i < input.length; i++) {
    nine += "9";
  }
  if (input == nine) {
    console.log(String(parseInt(nine) + 2));
  } else {
    if (left < right) {
      const p = left + rleft;
      if (p <= input) {
        const np =
          parseInt(left) +
          1 +
          String(parseInt(left) + 1)
            .split("")
            .reverse()
            .join("");
        console.log(np);
      }
    } else if (left === right) {
      const np =
        parseInt(left) +
        1 +
        String(parseInt(left) + 1)
          .split("")
          .reverse()
          .join("");
      console.log(np);
    } else if (left > right) {
      const p = left + rleft;
      console.log(p);
    }
  }
} else {
  //홀수일 때
  const left = input.substring(0, parseInt(size / 2 + 1) - 1);
  const right = input.substring(input.length, parseInt(size / 2 + 1));
  const rleft = left.split("").reverse().join("");
  let nine = "";
  for (i = 0; i < input.length; i++) {
    nine += "9";
  }
  if (input == nine) {
    console.log(String(parseInt(nine) + 2));
  } else {
    if (left < right) {
      // 왼쪽이 작을때
      const ll = input.substring(0, parseInt(size / 2 + 1));
      const p = ll + rleft;
      if (p <= input) {
        // 완성된 팰린드롬이 제시된 수 보다 큰지 확인
        const left = input.substring(0, parseInt(size / 2 + 1) - 1);
        const mid = input.substring(input.length / 2, input.length / 2 + 1);
        if (mid == 9) {
          const np =
            parseInt(left) +
            1 +
            "0" +
            String(parseInt(left) + 1)
              .split("")
              .reverse()
              .join("");
          console.log(np);
        } else {
          const nep = left + (parseInt(mid) + 1) + rleft;
          console.log(nep);
        }
      }
    } else if (left === right) {
      const mid = input.substring(input.length / 2, input.length / 2 + 1);
      if (mid == 9) {
        const np =
          parseInt(left) +
          1 +
          "0" +
          String(parseInt(left) + 1)
            .split("")
            .reverse()
            .join("");
        console.log(np);
      } else {
        const nep = left + (parseInt(mid) + 1) + rleft;
        console.log(nep);
      }
    } else if (left > right) {
      // 오른쪽이 작을때
      const l = input.substring(0, parseInt(size / 2 + 1));
      const p = l + rleft;
      console.log(p);
    }
  }
}
