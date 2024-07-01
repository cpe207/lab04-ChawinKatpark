function primeNumber(a: any) {
  if (a > 1) {
    for (let i: number = 2; i < a; i++) {
      if (a%i == 0) {
        return "NO";
      }
    }
    return "YES"; 
  } else {
    return "NO";
  }
}

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;

//นายชวิน เกตุภาค 660612142