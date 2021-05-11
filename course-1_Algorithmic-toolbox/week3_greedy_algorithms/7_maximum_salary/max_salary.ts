const maxSalary = (salaryParts: number[]): number => {
  let n = salaryParts.length
  if (salaryParts == null || n == 0)
    return 0

  let maxSal = +salaryParts.map(a => a.toString())
    .sort().reverse().reduce((a, b) => (a + b))

  return maxSal
}

console.log(maxSalary([23, 3]))