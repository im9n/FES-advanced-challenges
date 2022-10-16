
const steps = (n) => {
  for (let r = 0; r < n; ++r) {
    let steps = "";
    for (let c = 0; c < n; ++c) {
      if (c <= r) {
        steps += "#";
      } else {
        steps += " ";
      }
    }
    console.log(steps)
  }
};

steps(3)