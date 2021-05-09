var ldps = function (m, n) {
    if (n < 2)
        return n;
    var temp = 0, first = 0, second = 1;
    var sum = 0;
    for (var i = 2; i <= n; i++) {
        temp = (first + second) % 10;
        first = second;
        second = temp;
        if (i >= m) {
            sum = (sum + second) % 10;
        }
    }
    return sum;
};
console.log(ldps(10, 200));
