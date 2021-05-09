// Time: O(Log min(n1, n2)) 
const gcd = (a: number, b: number): number => {
  return b == 0 ? a : gcd(b, a % b)
}

console.log(gcd(1344, 217))