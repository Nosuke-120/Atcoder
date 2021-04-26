const main = (input) => {
  const args = input.split('\n');

  const N = parseInt(args[0], 10); 
  // let nums = args.slice(1, N+1).map(n => n.split(' '))
  list = [[0, 0, 0]];
    for (let i = 1; i <=n; i++) {
      let t = parseInt(lines[i].split(" ")[0], 10);
      let x = parseInt(lines[i].split(" ")[1], 10);
      let y = parseInt(lines[i].split(" ")[2], 10);
      list.push([t,x,y]);
    }
    for (let i = 0; i < n; i++){
      dt = list[i + 1][0] - list[i][0];
      dx = Math.abs(list[i + 1][1] - list[i][1]);
      dy = Math.abs(list[i + 1][2] - list[i][2]);
      //console.log(dt);
      //console.log(dx);
      //console.log(dy);
      dis = dx + dy;
      if (dis > dt || dt % 2 != dis % 2) {
        console.log("No");
        return false;
      }
    }
    console.log("Yes");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));