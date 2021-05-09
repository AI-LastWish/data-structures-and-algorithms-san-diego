const ss_fib = (n: number): number => {
  if (n < 2) return n

  let temp = 0, first = 0, second = 1
  let sum = first * first + second * second

  for (let i = 2; i <= n; i++) {
    temp = (first + second) % 10
    first = second
    second = temp

    sum = (sum + second * second) % 10
  }

  return sum
}

console.log(ss_fib(1234567890))