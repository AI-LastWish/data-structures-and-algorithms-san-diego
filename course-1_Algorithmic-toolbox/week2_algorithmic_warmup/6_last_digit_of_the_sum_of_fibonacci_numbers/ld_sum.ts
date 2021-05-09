const ld_sum = (n: number): number => {
  if (n < 2) return n

  let temp = 0, first = 0, second = 1
  let sum = first + second

  for (let i = 2; i <= n; i++) {
    temp = (first + second) % 10
    first = second
    second = temp
    sum = (sum + second) % 10
  }

  return sum
}

console.log(ld_sum(100))