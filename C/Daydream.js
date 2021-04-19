const main = (args) => {
  const reInput = reverse(args.split('\n')[0]);
  const reWords = ['dream', 'dreamer', 'erase', 'eraser'].map(reverse);

  let index = 0;

  while (true) {
    let w = reWords.find((w) => reInput.startsWith(w, index));
    //console.log(w)
    if (!w) break;
    index += w.length;
  }
  //console.log(index)
  index == reInput.length ? console.log("YES") : console.log("NO");
}

const reverse = (str) => {
  return str.split('').reverse().join('');
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));