const main = (input) => {
  const inputValues = input.split(" ");
  const a = inputValues[0];
  const b = inputValues[1];

  console.log(judgeNum(a, b));
};

const judgeNum = (a, b) => {
  result = (a * b) % 2 === 0 ? "Even" : "Odd"
  return result
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));