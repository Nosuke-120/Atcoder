const main = (input) => {
  let inputValues = input.split('\n');
  let tarNum = inputValues.slice(1,-1).map((val) => parseInt(val, 10));

  // 重複削除した餅の数
  let tarNumLength = [... new Set(tarNum)].length;

  console.log(tarNumLength);
}  
main(require("fs").readFileSync("/dev/stdin", "utf8"));