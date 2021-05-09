const ldps = (m: number, n: number): number => {
  if (n < 2) return n

  let temp = 0, first = 0, second = 1
  let sum = 0

  for (let i = 2; i <= n; i++) {
    temp = (first + second) % 10
    first = second
    second = temp

    if (i >= m) {
      sum = (sum + second) % 10
    }
  }

  return sum
}

console.log(ldps(10, 200))