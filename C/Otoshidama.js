const main = (input) => {
  let inputValues = input.split(' ');
  let N = parseInt(inputValues[0], 10); //枚数
  let Y = parseInt(inputValues[1], 10); //金額

  let result = '-1 -1 -1';
  // x + y + z =  N
  // 10000x + 5000y + 1000z =  Y
  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= N; j++ ) {
      if (i + j > N) continue;
      if (10000 * i + 5000 * j + 1000 * (N - i - j) == Y) {
        result = (`${i} ${j} ${N - i - j}`);
        break;
      }
    }
  }
  console.log(result);
}  
main(require("fs").readFileSync("/dev/stdin", "utf8"));