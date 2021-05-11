const max_prizes = (candies: number): number[] => {
  let arr: number[] = [], remain = candies

  for (let i = 1; i <= candies; i++) {
    if (2 * i + 1 > remain) {
      arr.push(remain)
      break
    }
    arr.push(i)
    remain -= i
  }

  return arr
}

console.log(max_prizes(8))