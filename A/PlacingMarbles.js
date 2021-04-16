const main = (input) => {
  const inputArr = input.split('');
  let result = 0; 

  for(let i=0; i<inputArr.length; i++) {
    if(parseInt(inputArr[i], 10) === 1) {
      result += 1
    };
  };

  console.log(result);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));