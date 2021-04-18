const main = (input) => {
  let inputValues = input.split('\n');
  let tarNum = inputValues[1].split(' ').map((val) => parseInt(val, 10));
  let alliceNum = 0
  let bobNum = 0

  // 降順で並び替え
  let sortedNum = tarNum.sort(compareFun);
  
  // お互い引いたカードを足し合わせる
  sortedNum.map(function(val, index) {
    if (index % 2 == 0) {
      alliceNum += val
    } else {
      bobNum += val
    }
  });

  console.log(alliceNum - bobNum);
};

const compareFun = (a, b) => {
  return b - a
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));