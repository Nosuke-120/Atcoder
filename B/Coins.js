const main = (input) => {
  let inputValues = input.split("\n").map((val) => parseInt(val, 10));
  let result = 0;

  for(let i =0; i<=inputValues[0]; i++) {
    for(let j =0; j<=inputValues[1]; j++) {
      for(let k =0; k<=inputValues[2]; k++) {
        if (500*i + 100*j + 50*k === inputValues[3]) {
          result++
        };
      };
    };
  };
  console.log(result);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));