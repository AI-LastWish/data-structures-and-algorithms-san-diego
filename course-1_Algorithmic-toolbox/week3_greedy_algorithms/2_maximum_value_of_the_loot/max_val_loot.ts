const mv_loot = (knapsack: number[][], capacity: number): number => {
  let sorted_ks = sortKs(knapsack)
  let remain = capacity, result = 0

  for (let i = 0; i < sorted_ks.length; i++) {
    let average = sorted_ks[i][0], val = sorted_ks[i][1], weight = sorted_ks[i][2]
    if (remain <= weight) {
      // remain = 0
      result += remain * average
      return result
    } else {
      remain -= weight
      result += val
    }
  }
}

const sortKs = (knapsack: number[][]): number[][] => {
  let result: number[][] = []

  for (let i = 0; i < knapsack.length; i++) {
    let val = knapsack[i][0]
    let weight = knapsack[i][1]
    let average = val / weight
    result.push([average, val, weight])
  }

  return result.sort().reverse()
}

// console.log(mv_loot([[60, 20], [100, 50], [120, 30]], 50))
console.log(mv_loot([[500, 30]], 10))