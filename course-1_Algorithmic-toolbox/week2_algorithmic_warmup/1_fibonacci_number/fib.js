// Time: O(n)
// Space: O(1)
var fib = function (n) {
    if (n < 2)
        return n;
    var temp = 0;
    var first = 0;
    var second = 1;
    for (var i = 2; i <= n; i++) {
        temp = first + second;
        first = second;
        second = temp;
    }
    return second;
};
console.log(fib(10));
