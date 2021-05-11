const fuel = (distance: number, miles: number, stops: number[]): number => {
  let n = stops.length, refills = 0, curr_refill = 0, limit = miles

  while (limit < distance) {
    // While the destination cannot be reached with current fuel
    if (curr_refill >= n || stops[curr_refill] > limit) {
      // Cannot reach the destination nor the next gas station
      return -1
    }

    // Find the furthest gas station we can reach
    while (curr_refill < n - 1 && stops[curr_refill + 1] <= limit) {
      curr_refill++
    }

    // Stop to tank
    refills++
    // Fill up the tank
    limit = stops[curr_refill] + miles
    // update current refill
    curr_refill++
  }

  return refills
}

console.log(fuel(950, 400, [200, 375, 550, 750]))
console.log(fuel(10, 3, [1, 2, 5, 9]))