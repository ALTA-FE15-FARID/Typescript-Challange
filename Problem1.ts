//Play with Asterisk

function printTriangle(size: number): void {
  for (let i = 1; i <= size; i++) {
    let line = "";
    for (let j = 1; j <= size - i; j++) {
      line += " ";
    }
    for (let k = 1; k <= i; k++) {
      line += "* ";
    }
    console.log(line);
  }
}

const size = 5;
printTriangle(size);
