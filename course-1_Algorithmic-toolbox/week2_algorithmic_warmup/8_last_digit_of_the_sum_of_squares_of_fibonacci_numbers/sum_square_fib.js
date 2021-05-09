var ss_fib = function (n) {
    if (n < 2)
        return n;
    var temp = 0, first = 0, second = 1;
    var sum = first * first + second * second;
    for (var i = 2; i <= n; i++) {
        temp = (first + second) % 10;
        first = second;
        second = temp;
        sum = (sum + second * second) % 10;
    }
    return sum;
};
console.log(ss_fib(1234567890));
