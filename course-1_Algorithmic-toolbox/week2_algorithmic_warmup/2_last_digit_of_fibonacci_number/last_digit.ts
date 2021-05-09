// Time: O(n)
// Space: O(1)
const last_digit = (n: number): number => {
  if (n < 2) return n

  let temp = 0
  let first = 0
  let second = 1
  for (let i = 2; i <= n; i++) {
    temp = (first + second) % 10
    first = second
    second = temp
  }
  return second
}

console.log(last_digit(327305))