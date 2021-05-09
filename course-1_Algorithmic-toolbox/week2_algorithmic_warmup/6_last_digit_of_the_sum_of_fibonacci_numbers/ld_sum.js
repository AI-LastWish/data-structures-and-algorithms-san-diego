var ld_sum = function (n) {
    if (n < 2)
        return n;
    var temp = 0, first = 0, second = 1;
    var sum = first + second;
    for (var i = 2; i <= n; i++) {
        temp = (first + second) % 10;
        first = second;
        second = temp;
        sum = (sum + second) % 10;
    }
    return sum;
};
console.log(ld_sum(100));
