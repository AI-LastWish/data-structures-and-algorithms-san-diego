const gcd = (a: number, b: number): number => {
  return b == 0 ? a : gcd(b, a % b)
}

const lcm = (a: number, b: number): number => {
  return a * b / gcd(a, b)
}

console.log(lcm(761457, 614573))