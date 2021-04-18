const main = (input) => {
  let inputValues = input.split(" ").map((val) => parseInt(val, 10));
  let result = 0;

  for(let i = 1; i <= inputValues[0]; i++) {
    const items = i.toString().split('').map((val) => parseInt(val, 10));
    const total = items.reduce((totalNum, currentNum) => totalNum + currentNum);
    if (inputValues[1] <= total && inputValues[2] >= total) {
      result += i
    };
  };

  console.log(result);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));