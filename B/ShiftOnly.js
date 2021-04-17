const main = (input) => {
  let [input, tmp] = input.split("\n");
  let tmp = tmp.split(" ").map((val) => parseInt(val, 10));
  let count = 0

  while(tmp.every((val) => val % 2 === 0)) {
    tmp.map((t) => t / 2);
    count++;
  };
  console.log(count);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));