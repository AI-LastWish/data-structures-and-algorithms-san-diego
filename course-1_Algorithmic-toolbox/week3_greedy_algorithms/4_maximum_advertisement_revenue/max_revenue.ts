const max_revenue = (profits: number[], clicks: number[]): number => {
  let sorted_profits = profits.sort((a, b) => (b - a))
  let sorted_clicks = clicks.sort((a, b) => (b - a))

  let result = 0

  for (let i = 0; i < sorted_profits.length; i++) {
    result += sorted_profits[i] * sorted_clicks[i]
  }

  return result
}

console.log(max_revenue([1, 3, -5], [-2, 4, 1]))