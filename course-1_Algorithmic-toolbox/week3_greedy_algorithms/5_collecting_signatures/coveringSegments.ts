const coveringSegments = (segments: number[][]): number => {
  let sorted_segments = segments.sort((a, b) => (a[1] - b[1]))

  let point = -1, points = 0
  for (let i = 0; i < sorted_segments.length; i++) {
    let start = sorted_segments[i][0]
    let end = sorted_segments[i][1]
    if (!(start <= point && point <= end)) {
      point = end
      points++
    }
  }

  return points
}

console.log(coveringSegments([[1, 3], [2, 5], [3, 6]]))
console.log(coveringSegments([[4, 7], [1, 3], [2, 5], [5, 6]]))