//const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const fs = require("fs");
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
    console.log(String(BigInt(nine) + 2n));
  } else {
    if ((left < right) | (left > right)) {
      const p = left + rleft;
      if (p <= input) {
        const np =
          BigInt(left) +
          1n +
          String(BigInt(left) + 1n)
            .split("")
            .reverse()
            .join("");
        console.log(np);
      } else {
        console.log(p);
      }
    } else if (left === right) {
      const p = left + rleft;
      if (input >= p) {
        const np =
          BigInt(left) +
          1n +
          String(BigInt(left) + 1n)
            .split("")
            .reverse()
            .join("");
        console.log(np);
      } else {
        console.log(p);
      }
    } else {
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
    console.log(String(BigInt(nine) + 2n));
  } else {
    if ((left < right) | (left > right)) {
      // 왼쪽이 작을때
      const ll = input.substring(0, parseInt(size / 2 + 1));
      const p = ll + rleft;
      if (p <= input) {
        // 완성된 팰린드롬이 제시된 수 보다 큰지 확인
        const left = input.substring(0, parseInt(size / 2 + 1) - 1);
        const mid = input.substring(input.length / 2, input.length / 2 + 1);
        if (mid == 9) {
          const np =
            BigInt(left) +
            1n +
            "0" +
            String(BigInt(left) + 1n)
              .split("")
              .reverse()
              .join("");
          console.log(np);
        } else {
          const nep = left + (parseInt(mid) + 1) + rleft;
          console.log(nep);
        }
      } else {
        console.log(p);
      }
    } else if (left === right) {
      const ll = input.substring(0, parseInt(size / 2 + 1));
      const p = ll + rleft;
      if (input >= p) {
        const mid = input.substring(input.length / 2, input.length / 2 + 1);
        if (mid == 9) {
          const np =
            BigInt(left) +
            1n +
            "0" +
            String(BigInt(left) + 1n)
              .split("")
              .reverse()
              .join("");
          console.log(np);
        } else {
          const nep = left + (parseInt(mid) + 1) + rleft;
          console.log(nep);
        }
      } else {
        console.log(p);
      }
    } else {
      const p = left + rleft;
      console.log(p);
    }
  }
}
