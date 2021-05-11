var maxSalary = function (salaryParts) {
    var n = salaryParts.length;
    if (salaryParts == null || n == 0)
        return 0;
    var maxSal = +salaryParts.map(function (a) { return a.toString(); })
        .sort().reverse().reduce(function (a, b) { return (a + b); });
    return maxSal;
};
console.log(maxSalary([23, 3]));
